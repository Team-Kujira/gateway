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
  ClobBatchUpdateRequest,
  ClobDeleteOrderRequest,
  ClobGetOrderRequest,
  ClobGetOrderResponse,
  CLOBMarkets,
  ClobMarketsRequest,
  ClobOrderbookRequest,
  ClobPostOrderRequest,
  ClobPostOrderResponse,
  ClobTickerRequest,
} from '../../clob/clob.requests';
import {
  convertHumingbotMarketNameToMarketName,
  convertMarketNameToHumingbotMarketName,
  convertClobBatchOrdersRequestToKujiraPlaceOrdersRequest,
  convertClobBatchOrdersRequestToKujiraCancelOrdersRequest,
} from './kujira.convertors';
import { getNotNullOrThrowError } from './kujira.helpers';
import {
  CancelOrdersResponse,
  GetAllMarketsResponse,
  OrderAmount,
  OrderPrice,
  OrderSide,
  OrderStatus,
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

  abiDecoder: any;

  public parsedMarkets: MarketInfo = [];

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
    await this.loadMarkets();
  }

  ready(): boolean {
    return this.kujira && this.kujira.isReady;
  }

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
      this.parsedMarkets[convertMarketNameToHumingbotMarketName(market.name)] =
        market;
    }
  }

  async markets(req: ClobMarketsRequest): Promise<{ markets: MarketInfo }> {
    if (req.market && req.market.split('-').length === 2) {
      const resp: CLOBMarkets = {};
      resp[req.market] = this.parsedMarkets[req.market];

      return { markets: resp };
    }

    return { markets: this.parsedMarkets };
  }

  async orderBook(req: ClobOrderbookRequest): Promise<Orderbook> {
    const orderBook = await this.kujira.getOrderBook({
      marketName: convertHumingbotMarketNameToMarketName(req.market),
    });

    const buys = [];
    for (const order of orderBook.bids.valueSeq()) {
      buys.push({
        price: getNotNullOrThrowError<OrderPrice>(order.price).toString(),
        quantity: getNotNullOrThrowError<OrderAmount>(order.amount).toString(),
        timestamp: order.creationTimestamp ? order.creationTimestamp : 0,
      });
    }

    const sells = [];
    for (const order of orderBook.asks.valueSeq()) {
      sells.push({
        price: getNotNullOrThrowError<OrderPrice>(order.price).toString(),
        quantity: getNotNullOrThrowError<OrderAmount>(order.amount).toString(),
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
        {
          orderHash: '',
          marketId: order.marketId,
          active: '',
          subaccountId: '',
          executionType: '',
          orderType: getNotNullOrThrowError<OrderType>(order.type),
          price: getNotNullOrThrowError<OrderPrice>(order.price).toString(),
          triggerPrice: '',
          quantity: order.amount.toString(),
          filledQuantity: '',
          state: getNotNullOrThrowError<OrderStatus>(order.status),
          createdAt: order.creationTimestamp
            ? order.creationTimestamp.toString()
            : '',
          updatedAt: order.fillingTimestamp
            ? order.fillingTimestamp.toString()
            : '',
          direction: order.side,
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
    // TODO This seems to be wrong but Injective is doing like that
    //  if the ticker should return the current price, Injective is not reloading them.
    // We have the method getTicker for that, which returns the current price, if needed.
    return await this.markets(req);
  }

  public async batchOrders(req: ClobBatchUpdateRequest): Promise<any> {
    try {
      if (req.createOrderParams || req.cancelOrderParams) {
        if (!req.cancelOrderParams) {
          const convertedReq = {
            chain: req.chain,
            network: req.network,
            ownerAddress: req.address,
            orders: convertClobBatchOrdersRequestToKujiraPlaceOrdersRequest(
              req.createOrderParams
            ),
          };
          const originalResponse = await this.kujira.placeOrders(convertedReq);
          return {
            network: this.network,
            timestamp: 0,
            latency: 0,
            txHash: getNotNullOrThrowError<string>(
              originalResponse.first()?.hashes?.creation
            ),
          } as ClobPostOrderResponse;
        } else if (!req.createOrderParams) {
          const convertedReq =
            convertClobBatchOrdersRequestToKujiraCancelOrdersRequest(req);
          const originalResponse: CancelOrdersResponse =
            await this.kujira.cancelOrders(convertedReq);
          console.log(originalResponse.valueSeq().toArray());
          return {
            network: this.network,
            timestamp: 0,
            latency: 0,
            txHash: 'originalResponse.first()?.hashes?.cancellation', // TODO Fix this !!!
          } as ClobPostOrderResponse;
        } else if (req.createOrderParams && req.cancelOrderParams) {
          const creationConvertedReq = {
            chain: req.chain,
            network: req.network,
            ownerAddress: req.address,
            orders: convertClobBatchOrdersRequestToKujiraPlaceOrdersRequest(
              req.createOrderParams
            ),
          };
          const createOrdersOriginalResponse = await this.kujira.placeOrders(
            creationConvertedReq
          );
          const cancelConvertedReq =
            convertClobBatchOrdersRequestToKujiraCancelOrdersRequest(req);
          const cancelOrdersOriginalResponse: CancelOrdersResponse =
            await this.kujira.cancelOrders(cancelConvertedReq);
          console.log(cancelOrdersOriginalResponse.valueSeq().toArray());

          return {
            network: this.network,
            timestamp: Date.now(),
            latency: 0,
            txHash: getNotNullOrThrowError<string>(
              createOrdersOriginalResponse.first()?.hashes?.creation +
                '' +
                'cancelOrdersOriginalResponse.first()?.hashes?.cancellation' // TODO Fix this !!!
            ),
          } as ClobPostOrderResponse;
        }
      }

      return {};
    } catch (error) {
      console.error(error);
    }
  }
}
