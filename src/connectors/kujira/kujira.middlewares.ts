import {
  ClobBatchUpdateRequest,
  ClobDeleteOrderRequest,
  ClobGetOrderRequest,
  ClobGetOrderResponse,
  CLOBMarkets,
  ClobMarketsRequest,
  ClobOrderbookRequest,
  ClobPostOrderRequest,
  ClobTickerRequest,
} from '../../clob/clob.requests';
import { Orderbook } from '@injectivelabs/sdk-ts';
import {
  convertClobBatchUpdateRequestToDeleteOrdersOptions,
  convertClobBatchUpdateRequestToPlaceOrdersOptions,
  convertClobDeleteOrderRequestToCancelOrderOptions,
  convertClobGetOrderRequestToGetOrderOptions,
  convertClobMarketsRequestToGetMarketOptions,
  convertClobOrderbookRequestToGetOrderBookOptions,
  convertClobPostOrderRequestToPlaceOrderOptions,
  convertClobTickerRequestToGetTickerOptions,
  convertEstimateGasRequestToGetMarketEstimatedFeesOptions,
  convertToClobDeleteOrderResponse,
  convertToClobGetOrderResponse,
  convertToClobMarketResponse,
  convertToClobOrderbookResponse,
  convertToClobPostOrderResponse,
  convertToClobTickerResponse,
  convertToEstimatedFeesResponse,
} from './kujira.convertors';
import { Kujira } from './kujira';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cache, CacheContainer } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { EstimatedGaResponse } from './kujira.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caches = {
  instances: new CacheContainer(new MemoryStorage()),
};

export class KujiraMiddleware {
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
  ): Promise<KujiraMiddleware> {
    return new KujiraMiddleware(chain, network);
  }

  async init() {
    this.kujira = await Kujira.getInstance(this.chain, this.network);
    await this.kujira.init();
  }

  ready(): boolean {
    return this.kujira.isReady;
  }

  public async markets(
    req: ClobMarketsRequest
  ): Promise<{ markets: CLOBMarkets }> {
    return convertToClobMarketResponse(
      await this.kujira.getMarket(
        convertClobMarketsRequestToGetMarketOptions(req)
      )
    );
  }

  public async orderBook(req: ClobOrderbookRequest): Promise<Orderbook> {
    return convertToClobOrderbookResponse(
      await this.kujira.getOrderBook(
        convertClobOrderbookRequestToGetOrderBookOptions(req)
      )
    );
  }

  public async ticker(
    req: ClobTickerRequest
  ): Promise<{ markets: CLOBMarkets }> {
    return convertToClobTickerResponse(
      await this.kujira.getTicker(
        convertClobTickerRequestToGetTickerOptions(req)
      )
    );
  }

  public async orders(
    req: ClobGetOrderRequest
  ): Promise<{ orders: ClobGetOrderResponse['orders'] }> {
    return convertToClobGetOrderResponse(
      await this.kujira.getOrder(
        convertClobGetOrderRequestToGetOrderOptions(req)
      )
    );
  }

  public async postOrder(
    req: ClobPostOrderRequest
  ): Promise<{ txHash: string }> {
    return convertToClobPostOrderResponse(
      await this.kujira.placeOrder(
        convertClobPostOrderRequestToPlaceOrderOptions(req)
      )
    );
  }

  public async deleteOrder(
    req: ClobDeleteOrderRequest
  ): Promise<{ txHash: string }> {
    return convertToClobDeleteOrderResponse(
      await this.kujira.cancelOrder(
        convertClobDeleteOrderRequestToCancelOrderOptions(req)
      )
    );
  }

  public async batchOrders(
    req: ClobBatchUpdateRequest
  ): Promise<{ txHash: string }> {
    if (req.createOrderParams) {
      return convertToClobDeleteOrderResponse(
        await this.kujira.placeOrders(
          convertClobBatchUpdateRequestToPlaceOrdersOptions(req)
        )
      );
    } else if (req.cancelOrderParams) {
      return convertToClobDeleteOrderResponse(
        await this.kujira.cancelOrders(
          convertClobBatchUpdateRequestToDeleteOrdersOptions(req)
        )
      );
    } else {
      throw new Error('Invalid batch update request');
    }
  }

  public async estimateGas(
    gasPrice: number,
    gasPriceToken: string,
    gasLimit: number,
    gasCost: number
  ): Promise<EstimatedGaResponse> {
    return convertToEstimatedFeesResponse(
      await this.kujira.getMarketEstimatedFees(
        convertEstimateGasRequestToGetMarketEstimatedFeesOptions(
          gasPrice,
          gasPriceToken,
          gasLimit,
          gasCost
        )
      )
    );
  }
}
