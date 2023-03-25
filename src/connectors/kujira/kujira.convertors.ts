import {
  Balance,
  Balances,
  BlockNumber,
  CancelOrderOptions,
  CancelOrdersOptions,
  CreateOrdersRequest,
  EstimatedFees,
  EstimatedGaResponse,
  GetAllBalancesOptions,
  GetEstimatedFeesOptions,
  GetMarketOptions,
  GetOrderBookOptions,
  GetOrderOptions,
  GetTickerOptions,
  GetTransactionOptions,
  IMap,
  KujiraOrder,
  KujiraOrderBook,
  KujiraSettlement,
  Market,
  Order,
  OrderBook,
  OrderId,
  OrderSide,
  OrderStatus,
  OrderType as KujiraOrderType,
  PlaceOrderOptions,
  PlaceOrdersOptions,
  Settlement,
  Ticker,
  Token,
  TokenId,
  Transaction,
  TransactionSignatures,
} from './kujira.types';
import {
  ClobBatchUpdateRequest,
  ClobDeleteOrderRequest,
  ClobDeleteOrderRequestExtract,
  ClobGetOrderRequest,
  ClobGetOrderResponse,
  ClobMarketResponse,
  CLOBMarkets,
  ClobMarketsRequest,
  ClobOrderbookRequest,
  ClobPostOrderRequest,
  ClobTickerRequest,
  CreateOrderParam,
} from '../../clob/clob.requests';
import { OrderType as ClobOrderType, Side } from '../../amm/amm.requests';
import { KujiraConfig } from './kujira.config';
import { Denom, fin, MAINNET, TESTNET } from 'kujira.js';
import {
  DeliverTxResponse,
  IndexedTx,
} from '@cosmjs/stargate/build/stargateclient';
import contracts from 'kujira.js/src/resources/contracts.json';
import { Orderbook, PriceLevel, SpotMarket } from '@injectivelabs/sdk-ts';
import { getNotNullOrThrowError } from './kujira.helpers';
import {
  BalancesRequest,
  BalancesResponse,
  PollRequest,
  PollResponse,
} from '../../chains/kujira/kujira.requests';
import { BigNumber } from 'bignumber.js';
import { Coin } from '@cosmjs/proto-signing';

const config = KujiraConfig.config;

export const convertClobMarketsRequestToGetMarketOptions = (
  request: ClobMarketsRequest
): GetMarketOptions => {
  return {
    id: request.market,
  } as GetMarketOptions;
};

export const convertClobOrderbookRequestToGetOrderBookOptions = (
  request: ClobOrderbookRequest
): GetOrderBookOptions => {
  return {
    marketId: request.market,
  } as GetOrderBookOptions;
};

export const convertClobTickerRequestToGetTickerOptions = (
  request: ClobTickerRequest
): GetTickerOptions => {
  return {
    marketId: request.market,
  } as GetTickerOptions;
};

export const convertClobSideToKujiraOrderSide = (request: Side): OrderSide => {
  if (request == 'BUY') {
    return OrderSide.BUY;
  } else if (request == 'SELL') {
    return OrderSide.SELL;
  } else {
    throw new Error('Error converting Side to OrderSide');
  }
};

export const convertKujiraOrderSideToClobSide = (request: OrderSide): Side => {
  if (request == OrderSide.BUY) {
    return 'BUY';
  } else if (request == OrderSide.SELL) {
    return 'SELL';
  } else {
    throw new Error('Error converting OrderSide to Side');
  }
};

export const convertClobOrderTypeToKujiraOrderType = (
  request: ClobOrderType
): KujiraOrderType => {
  if (request == 'LIMIT') {
    return KujiraOrderType.LIMIT;
  } else if (request == 'LIMIT_MAKER') {
    return KujiraOrderType.POST_ONLY;
  } else {
    throw new Error('Error in conversion between order type');
  }
};

export const convertClobPostOrderRequestToPlaceOrderOptions = (
  request: ClobPostOrderRequest | CreateOrderParam
): PlaceOrderOptions => {
  return {
    waitUntilIncludedInBlock: false,
    marketId: request.market,
    ownerAddress: 'address' in request ? request.address : undefined,
    side: convertClobSideToKujiraOrderSide(request.side),
    price: BigNumber(request.price),
    amount: BigNumber(request.amount),
    type: convertClobOrderTypeToKujiraOrderType(request.orderType),
    payerAddress: 'address' in request ? request.address : undefined, // TODO, is the payer always the owner? !!!
  } as unknown as PlaceOrderOptions;
};

export const convertClobGetOrderRequestToGetOrderOptions = (
  request: ClobGetOrderRequest
): GetOrderOptions => {
  return {
    id: request.orderId,
    marketId: request.market,
    marketIds: undefined,
    ownerAddress: request.address,
    status: OrderStatus.OPEN,
    statuses: undefined,
  } as GetOrderOptions;
};

export const convertClobBatchUpdateRequestToPlaceOrdersOptions = (
  request: ClobBatchUpdateRequest
): PlaceOrdersOptions => {
  return {
    waitUntilIncludedInBlock: false,
    orders: request.createOrderParams?.map((order) => {
      return convertClobPostOrderRequestToPlaceOrderOptions(order);
    }),
  } as PlaceOrdersOptions;
};

export const convertClobBatchUpdateRequestToDeleteOrdersOptions = (
  request: ClobBatchUpdateRequest
): CancelOrdersOptions => {
  const marketId = convertClobDeleteOrderRequestToCancelOrderOptions(
    getNotNullOrThrowError<ClobDeleteOrderRequestExtract[]>(
      request.cancelOrderParams
    )[0]
  ).marketId;

  return {
    ids: request.cancelOrderParams?.map((order) => {
      return convertClobDeleteOrderRequestToCancelOrderOptions(order).id;
    }),
    marketId: marketId,
    ownerAddress: request.address,
  } as CancelOrdersOptions;
};

export const convertClobDeleteOrderRequestToCancelOrderOptions = (
  request: ClobDeleteOrderRequest | ClobDeleteOrderRequestExtract
): CancelOrderOptions => {
  return {
    id: request.orderId,
    ownerAddress: 'address' in request ? request.address : undefined,
    marketId: 'market' in request ? request.market : undefined,
  } as CancelOrderOptions;
};

export const convertBalanceRequestToGetAllBalancesOptions = (
  request: BalancesRequest
): GetAllBalancesOptions => {
  return {
    ownerAddress: request.address,
  } as GetAllBalancesOptions;
};

export const convertPollRequestToGetTransactionOptions = (
  request: PollRequest
): GetTransactionOptions => {
  return {
    signature: request.txHash,
  } as GetTransactionOptions;
};

export const convertEstimateGasRequestToGetMarketEstimatedFeesOptions = (
  _gasPrice: number,
  _gasPriceToken: string,
  _gasLimit: number,
  _gasCost: number
): GetEstimatedFeesOptions => {
  return {} as GetEstimatedFeesOptions;
};

// TODO fix!!!
export const convertToClobMarketResponse = (
  response: Market
): ClobMarketResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    markets: {
      market: {
        marketId: response.id,
        marketStatus: 'active',
        ticker: undefined,
        baseDenom: undefined,
        quoteDenom: undefined,
        makerFeeRate: undefined,
        quoteToken: {
          name: response.quoteToken.name,
          logo: undefined,
          symbol: response.quoteToken.symbol,
          decimals: undefined,
          tokenType: undefined,
          coinGeckoId: undefined,
          ibc: undefined,
          spl: undefined,
          cw20: undefined,
          cw20s: undefined,
          erc20: undefined,
        },
        baseToken: {
          name: response.baseToken.name,
          logo: undefined,
          symbol: response.baseToken.symbol,
          decimals: undefined,
          tokenType: undefined,
          coinGeckoId: undefined,
          ibc: undefined,
          spl: undefined,
          cw20: undefined,
          cw20s: undefined,
          erc20: undefined,
        },
        takerFeeRate: response.fee.maker, // TODO what is the differrence between maker to taker? !!!
        serviceProviderFee: undefined, // TODO resolve this one as well !!!
        minPriceTickSize: response.minimumOrderSize,
        minQuantityTickSize: response.minimumBaseIncrement,
      } as unknown as SpotMarket,
    },
  } as ClobMarketResponse;
};

// TODO fix!!!
export const convertKujiraOrderToClobPriceLevel = (
  response: Order
): PriceLevel => {
  return {
    price: response.price,
    quantity: response.amount,
    timestamp: Date.now(), // TODO verify if this is the correct way to convert the timestamp !!!
  } as unknown as PriceLevel;
};

export const convertToClobOrderbookResponse = (
  response: OrderBook
): Orderbook => {
  return {
    buys: response.bids
      .valueSeq()
      .map((obj) => {
        return convertKujiraOrderToClobPriceLevel(obj);
      })
      .toArray() as PriceLevel[],
    sells: response.asks
      .valueSeq()
      .map((obj) => {
        return convertKujiraOrderToClobPriceLevel(obj);
      })
      .toArray() as PriceLevel[],
  } as Orderbook;
};

// TODO fix!!!
export const convertToClobTickerResponse = (
  response: Ticker
): { markets: CLOBMarkets } => {
  const resp: CLOBMarkets = {};
  resp[response.ticker.toString()] = {
    marketId: undefined,
    marketStatus: undefined,
    ticker: undefined,
    baseDenom: undefined,
    quoteDenom: undefined,
    makerFeeRate: undefined,
    quoteToken: {
      name: undefined,
      logo: undefined,
      symbol: undefined,
      decimals: undefined,
      tokenType: undefined,
      coinGeckoId: undefined,
      ibc: undefined,
      spl: undefined,
      cw20: undefined,
      cw20s: undefined,
      erc20: undefined,
    },
    baseToken: {
      name: undefined,
      logo: undefined,
      symbol: undefined,
      decimals: undefined,
      tokenType: undefined,
      coinGeckoId: undefined,
      ibc: undefined,
      spl: undefined,
      cw20: undefined,
      cw20s: undefined,
      erc20: undefined,
    },
    takerFeeRate: undefined,
    serviceProviderFee: undefined,
    minPriceTickSize: undefined,
    minQuantityTickSize: undefined,
  } as unknown as SpotMarket;
  return { markets: resp };
};

export const convertToClobPostOrderResponse = (
  response: Order
): { txHash: string } => {
  return {
    txHash: response.signatures?.creation,
  } as { txHash: string };
};

// TODO fix!!!
export const convertToClobGetOrderResponse = (
  // TODO verify the injective output to ensure the return data !!!
  response: Order
): ClobGetOrderResponse => {
  return {
    network: config.network,
    timestamp: Date.now(),
    latency: 0,
    orders: [
      {
        orderHash: response.signatures?.creation?.toString(),
        marketId: response.marketId,
        active: undefined,
        subaccountId: response.ownerAddress,
        executionType: response.type?.toLowerCase(),
        orderType: convertKujiraOrderSideToClobSide(
          response.side
        ).toLowerCase(),
        price: response.price.toString(),
        triggerPrice: undefined,
        quantity: response.amount.toString(),
        filledQuantity: undefined,
        state: response.status?.toLowerCase(),
        createdAt: response.fillingTimestamp?.toString(),
        updatedAt: undefined, //TODO there is no mention to update into order type !!!
        direction: convertKujiraOrderSideToClobSide(
          response.side
        ).toLowerCase(),
      },
    ],
  } as unknown as ClobGetOrderResponse;
};

export const convertToClobDeleteOrderResponse = (
  response: Order
): { txHash: string } => {
  return {
    txHash: getNotNullOrThrowError<string>(
      response.signatures?.cancellation ||
        response.signatures?.cancellations?.values().next().value
    ),
  };
};

export const convertToClobDeleteOrderResponseForCreation = (
  response: IMap<OrderId, Order>
): { txHash: string } => {
  return {
    txHash: getNotNullOrThrowError<string>(
      response.values().next().value.signatures?.creation ||
        response.values().next().value.signatures?.creations.values().next()
          .value
    ),
  };
};

export const convertToClobDeleteOrderResponseForCancellation = (
  response: IMap<OrderId, Order>
): { txHash: string } => {
  return {
    txHash: getNotNullOrThrowError<string>(
      response.values().next().value.signatures?.cancellation ||
        response.values().next().value.signatures?.cancellations.values().next()
          .value
    ),
  };
};

// TODO fix!!!
export const convertToBalancesResponse = (
  _response: Balances
): BalancesResponse => {
  return {
    injectiveAddress: undefined,
    balances: undefined,
    subaccounts: undefined,
  } as unknown as BalancesResponse;
};

// TODO fix!!!
export const convertToPollResponse = (
  _transaction: Transaction,
  _currentBlockNumber: BlockNumber
): PollResponse => {
  return {
    blockNumber: undefined,
    hash: undefined,
    gasWanted: undefined,
    gasLimit: undefined,
    gasUsed: undefined,
    sequences: undefined,
  } as unknown as PollResponse;
};

// TODO fix!!!
export const convertToEstimatedFeesResponse = (
  // TODO both types are kujira types, verify if this is correct !!!
  _response: EstimatedFees
): EstimatedGaResponse => {
  return {
    gasPrice: undefined,
    gasPriceToken: undefined,
    gasLimit: undefined,
    gasCost: undefined,
  } as unknown as EstimatedGaResponse;
};

export const convertKujiraTokenToToken = (token: Denom): Token => {
  return {
    id: token.reference,
    name: token.symbol,
    symbol: token.symbol,
    decimals: token.decimals,
  };
};

// TODO fix!!!
export const convertKujiraMarketToMarket = (_market: fin.Pair): Market => {
  return {
    id: undefined,
    name: undefined,
    baseToken: undefined,
    quoteToken: undefined,
    minimumOrderSize: undefined,
    tickSize: undefined,
    minimumBaseIncrement: undefined,
    fee: undefined,
    programId: undefined,
    deprecated: undefined,
    connectorMarket: undefined,
  } as unknown as Market;
};

// TODO fix!!!
export const convertKujiraOrderBookToOrderBook = (
  market: Market,
  kujiraOrderBook: KujiraOrderBook
): OrderBook => {
  return {
    market: market,
    bids: undefined,
    asks: undefined,
    bestBid: undefined,
    bestAsk: undefined,
    connectorOrderBook: kujiraOrderBook,
  } as unknown as OrderBook;
};

export const convertKujiraOrdersToMapOfOrders = (
  _kujiraOrders: KujiraOrder[] | KujiraOrderBook | DeliverTxResponse | any[],
  _market?: Market,
  _ownerAddress?: string,
  _status?: OrderStatus
): IMap<OrderId, Order> => {
  const output = IMap<OrderId, Order>().asMutable();

  // for (const kujiraOrder of kujiraOrders) {
  //   const order = convertKujiraOrderToOrder(
  //     kujiraOrder,
  //     market,
  //     ownerAddress,
  //     status
  //   );
  //
  // output.set(order.id, order);
  // }

  return output;
};

// TODO create an interface for the input type!!!
export const convertToTicker = (input: any): Ticker => {
  const price = BigNumber(input.price);
  const timestamp = new Date().getTime(); // TODO check if there's a timestamp available!!!

  return {
    price: price,
    timestamp: timestamp,
    ticker: input,
  };
};

export const convertKujiraBalancesToBalances = (
  balances: readonly Coin[]
): Balances => {
  const output: Balances = {
    tokens: IMap<TokenId, Balance>().asMutable(),
    total: {
      token: 'total',
      free: BigNumber(0),
      lockedInOrders: BigNumber(0),
      unsettled: BigNumber(0),
    },
  };

  for (const balance of balances) {
    const token = convertKujiraTokenToToken(Denom.from(balance.denom));
    const amount = BigNumber(balance.amount);
    output.tokens.set(token.id, {
      token: token,
      free: amount,
      lockedInOrders: BigNumber(0),
      unsettled: BigNumber(0),
    });

    output.total.free = output.total.free.plus(amount);
    output.total.lockedInOrders = output.total.lockedInOrders.plus(amount);
    output.total.unsettled = output.total.unsettled.plus(amount);
  }

  return output;
};

export const convertKujiraTransactionToTransaction = (
  input: IndexedTx
): Transaction => {
  return {
    signature: input.hash,
    blockNumber: input.height,
    gasUsed: input.gasUsed,
    gasWanted: input.gasWanted,
    code: input.code,
  };
};

// TODO fix!!!
export const convertKujiraOrderToOrder = (
  _kujiraOrder: KujiraOrder,
  _market?: Market,
  _ownerAddress?: string,
  _status?: OrderStatus,
  _signatures?: TransactionSignatures,
  _candidateOrder?: CreateOrdersRequest
): Order => {
  return {
    id: undefined,
    clientId: undefined,
    marketName: undefined,
    marketId: undefined,
    ownerAddress: undefined,
    payerAddress: undefined,
    price: undefined,
    amount: undefined,
    side: undefined,
    status: undefined,
    type: undefined,
    fee: undefined,
    fillingTimestamp: undefined,
    signatures: undefined,
    connectorOrder: undefined,
  } as unknown as Order;
};

export const convertKujiraSettlementToSettlement = (
  input: KujiraSettlement
): Settlement => {
  return {
    signature: input.transactionHash,
  };
};

export const convertNetworkToKujiraNetwork = (
  input: string
): keyof typeof contracts => {
  input = input.toLowerCase();
  let output: keyof typeof contracts;

  if (input.toLowerCase() == 'mainnet') {
    output = MAINNET;
  } else if (input.toLowerCase() == 'testnet') {
    output = TESTNET;
  } else {
    throw new Error(`Unrecognized network: ${input}`);
  }

  return output;
};
