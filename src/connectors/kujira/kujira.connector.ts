import { Kujira } from './kujira';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import {
  CLOBish,
  MarketInfo,
  NetworkSelectionRequest,
  Orderbook,
} from '../../services/common-interfaces';
import {
  ClobDeleteOrderRequest,
  ClobGetOrderRequest,
  ClobGetOrderResponse,
  ClobMarketsRequest,
  ClobOrderbookRequest,
  ClobPostOrderRequest,
  ClobTickerRequest,
} from '../../clob/clob.requests';
import {
  convertHumingbotMarketNameToMarketName,
  convertMarketNameToHumingbotMarketName,
} from './kujira.convertors';
import { getNotNullOrThrowError } from './kujira.helpers';
import {
  GetAllMarketsResponse,
  OrderSide,
  OrderType,
  OwnerAddress,
  Token,
  TransactionHash,
} from './kujira.types';
import { BigNumber } from 'bignumber.js';
import { BalanceRequest } from '../../network/network.requests';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraConnector implements CLOBish {
  chain: string;

  network: string;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private kujira: Kujira;

  private constructor(chain: string, network: string) {
    this.chain = chain;
    this.network = network;
  }

  @Cache(caches.instances, { isCachedForever: true })
  static async getInstance(
    chain: string,
    network: string
  ): Promise<KujiraConnector> {
    return new KujiraConnector(chain, network);
  }

  async init() {
    this.kujira = await Kujira.getInstance(this.chain, this.network);
    await this.kujira.init();
  }

  ready(): boolean {
    return this.kujira && this.kujira.isReady;
  }

  abiDecoder: any;

  public parsedMarkets: MarketInfo = [];

  async balances(req: BalanceRequest): Promise<Record<string, string>> {
    const balances = await this.kujira.getBalances({
      ownerAddress: req.address,
      tokenSymbols: req.tokenSymbols,
    });

    const output: Record<string, string> = {};

    for (const balance of balances.tokens.values()) {
      output[(balance.token as Token).symbol] = balance.free.toString();
    }

    return output;
  }

  async deleteOrder(req: ClobDeleteOrderRequest): Promise<{ txHash: string }> {
    const result = await this.kujira.cancelOrder({
      id: req.orderId,
      marketName: convertHumingbotMarketNameToMarketName(req.market),
      ownerAddress: req.address,
    });

    return {
      txHash: getNotNullOrThrowError<TransactionHash>(
        result.hashes?.cancellation
      ),
    };
  }

  estimateGas(_req: NetworkSelectionRequest): {
    gasPrice: number;
    gasPriceToken: string;
    gasLimit: number;
    gasCost: number;
  } {
    const result = this.kujira.getEstimatedFees({});

    return {
      gasCost: result.cost.toNumber(),
      gasLimit: result.limit.toNumber(),
      gasPrice: result.price.toNumber(),
      gasPriceToken: result.token,
    };
  }

  async loadMarkets(): Promise<void> {
    const allMarkets =
      (await this.kujira.getAllMarkets()) as GetAllMarketsResponse;

    for (const market of allMarkets.values()) {
      // TODO Change the market value format!!!
      this.parsedMarkets[convertMarketNameToHumingbotMarketName(market.name)] =
        market;
    }
  }

  async markets(req: ClobMarketsRequest): Promise<{ markets: MarketInfo }> {
    if (req.market && req.market in this.parsedMarkets)
      return { markets: this.parsedMarkets[req.market] };

    return { markets: Object.values(this.parsedMarkets) };
  }

  async orderBook(req: ClobOrderbookRequest): Promise<Orderbook> {
    const orderBook = await this.kujira.getOrderBook({
      marketName: convertHumingbotMarketNameToMarketName(req.market),
    });

    const buys = [];
    for (const order of orderBook.bids.valueSeq()) {
      buys.push({
        price: order.price ? order.price.toString() : '',
        quantity: order.amount.toString(),
        timestamp: order.creationTimestamp ? order.creationTimestamp : 0,
      });
    }

    const sells = [];
    for (const order of orderBook.asks.valueSeq()) {
      sells.push({
        price: order.price ? order.price.toString() : '',
        quantity: order.amount.toString(),
        timestamp: order.creationTimestamp ? order.creationTimestamp : 0,
      });
    }

    return { buys, sells };
  }

  async orders(
    req: ClobGetOrderRequest
  ): Promise<{ orders: ClobGetOrderResponse['orders'] }> {
    const order = await this.kujira.getOrder({
      id: req.orderId,
      marketName: convertHumingbotMarketNameToMarketName(req.market),
      ownerAddress: getNotNullOrThrowError<OwnerAddress>(req.address),
    });

    return {
      orders: [
        // TODO Check this convertor!!!
        {
          network: this.network ? this.network : '',
          timestamp: order.creationTimestamp
            ? order.creationTimestamp.toString()
            : '',
          latency: '',
          id: order.id ? order.id : '',
          marketName: order.marketName,
          marketId: order.marketId,
          market: JSON.stringify(order.market),
          ownerAddress: order.ownerAddress ? order.ownerAddress : '',
          price: order.price ? order.price.toString() : '',
          amount: order.amount ? order.amount.toString() : '',
          side: order.side,
          status: order.status ? order.status : '',
          type: order.type ? order.type : '',
          fee: order.fee ? order.fee.toString() : '',
          creationTimestamp: order.creationTimestamp
            ? order.creationTimestamp.toString()
            : '',
          fillingTimestamp: order.fillingTimestamp
            ? order.fillingTimestamp.toString()
            : '',
          hashes: order.hashes ? JSON.stringify(order.hashes) : '',
        },
      ],
    };
  }

  async postOrder(req: ClobPostOrderRequest): Promise<{ txHash: string }> {
    const result = await this.kujira.placeOrder({
      marketName: convertHumingbotMarketNameToMarketName(req.market),
      ownerAddress: req.address,
      side: req.side as OrderSide,
      price: BigNumber(req.price),
      amount: BigNumber(req.amount),
      type: req.orderType as OrderType,
    });

    return { txHash: getNotNullOrThrowError<string>(result.hashes?.creation) };
  }

  public async ticker(
    req: ClobTickerRequest
  ): Promise<{ markets: MarketInfo }> {
    // TODO check the output format!!!
    return await this.markets(req);
  }
}
