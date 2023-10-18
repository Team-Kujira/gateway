import {
  Amount,
  Balances,
  ConvertOrderType,
  GetKujiraTokenSymbolsToCoinGeckoTokenIdsMapResponse,
  GetTokenSymbolsToTokenIdsMapResponse,
  IMap,
  KujiraEvent,
  KujiraOrderBook,
  KujiraWithdraw,
  Market,
  MarketName,
  Order,
  OrderAmount,
  OrderBook,
  OrderFilling,
  OrderId,
  OrderPrice,
  OrderSide,
  OrderStatus,
  OrderType,
  Price,
  Ticker,
  TickerSource,
  Token,
  TokenBalance,
  TokenId,
  Transaction,
  TransactionHashes,
  Withdraw,
  Withdraws,
} from './kujira.types';
import { KujiraConfig } from './kujira.config';
import { Denom, fin, KUJI, MAINNET, TESTNET } from 'kujira.js';
import { IndexedTx } from '@cosmjs/stargate/build/stargateclient';
import contracts from 'kujira.js/src/resources/contracts.json';
import { getNotNullOrThrowError } from './kujira.helpers';
import { BigNumber } from 'bignumber.js';
import { Coin } from '@cosmjs/proto-signing';
import { parseCoins } from '@cosmjs/stargate';
import { TokenInfo } from '../../services/base';

export const convertToGetTokensResponse = (token: Token): TokenInfo => {
  return {
    chainId: token.id,
    address: undefined,
    name: token.name,
    symbol: token.symbol,
    decimals: token.decimals,
  } as unknown as TokenInfo;
};

export const convertKujiraTokenToToken = (token: Denom): Token => {
  return {
    id: token.reference,
    name: token.symbol,
    symbol: token.symbol,
    decimals: token.decimals,
  };
};

export const convertHumingbotMarketNameToMarketName = (
  input: string
): MarketName => {
  return input.replace('-', '/');
};

export const convertMarketNameToHumingbotMarketName = (
  input: string
): string => {
  return input.replace('/', '-');
};

export const convertKujiraMarketToMarket = (market: fin.Pair): Market => {
  const baseToken = convertKujiraTokenToToken(market.denoms[0]);
  const quoteToken = convertKujiraTokenToToken(market.denoms[1]);

  const decimalPlaces =
    'decimal_places' in market.precision
      ? market.precision?.decimal_places
      : market.precision.significant_figures;

  const minimumPriceIncrement = BigNumber(Math.pow(10, -1 * decimalPlaces));

  return {
    id: market.address,
    name: `${baseToken.symbol}/${quoteToken.symbol}`,
    baseToken: baseToken,
    quoteToken: quoteToken,
    precision: decimalPlaces,
    minimumOrderSize: minimumPriceIncrement, // Considering the market precision as the minimum value
    minimumPriceIncrement: minimumPriceIncrement, // Considering the market precision as the minimum value
    minimumBaseAmountIncrement: minimumPriceIncrement, // Considering the market precision as the minimum value
    minimumQuoteAmountIncrement: minimumPriceIncrement, // Considering the market precision as the minimum value
    fees: {
      maker: KujiraConfig.config.fees.maker,
      taker: KujiraConfig.config.fees.taker,
      serviceProvider: KujiraConfig.config.fees.serviceProvider,
    },
    programId: undefined,
    deprecated: false,
    connectorMarket: market,
  } as Market;
};

export const convertKujiraOrderBookToOrderBook = (
  market: Market,
  kujiraOrderBook: KujiraOrderBook
): OrderBook => {
  const bids = IMap<OrderId, Order>().asMutable();
  const asks = IMap<OrderId, Order>().asMutable();
  let bestBid: Order | undefined;
  let bestAsk: Order | undefined;
  let bestBidPrice = BigNumber('-Infinity');
  let bestAskPrice = BigNumber('Infinity');

  let counter = 0;
  kujiraOrderBook.base.forEach((kujiraOrder) => {
    const order = {
      id: undefined,
      clientId: undefined,
      marketName: market.name,
      marketId: market.id,
      ownerAddress: undefined,
      payerAddress: undefined,
      price: BigNumber(kujiraOrder.quote_price),
      amount: BigNumber(kujiraOrder.total_offer_amount),
      side: OrderSide.SELL,
      status: OrderStatus.OPEN,
      type: OrderType.LIMIT,
      fee: undefined,
      fillingTimestamp: undefined,
      hashes: undefined,
      connectorOrder: undefined,
    } as Order;

    if (bestAsk) {
      if (order.price?.lt(bestAskPrice)) {
        bestAsk = order;
        bestAskPrice = getNotNullOrThrowError<OrderPrice>(order.price);
      }
    } else {
      bestAsk = order;
      bestAskPrice = getNotNullOrThrowError<OrderPrice>(order.price);
    }

    asks.set(`unknown_${counter++}`, order);
  });

  kujiraOrderBook.quote.forEach((kujiraOrder) => {
    const order = {
      id: undefined,
      clientId: undefined,
      marketName: market.name,
      marketId: market.id,
      ownerAddress: undefined,
      payerAddress: undefined,
      price: BigNumber(kujiraOrder.quote_price),
      amount: BigNumber(kujiraOrder.total_offer_amount),
      side: OrderSide.BUY,
      status: OrderStatus.OPEN,
      type: OrderType.LIMIT,
      fee: undefined,
      fillingTimestamp: undefined,
      hashes: undefined,
      connectorOrder: undefined,
    } as Order;

    if (bestBid) {
      if (order.price?.gt(bestBidPrice)) {
        bestBid = order;
        bestBidPrice = getNotNullOrThrowError<OrderPrice>(order.price);
      }
    } else {
      bestBid = order;
      bestBidPrice = getNotNullOrThrowError<OrderPrice>(order.price);
    }

    bids.set(`unknown_${counter++}`, order);
  });

  return {
    market: market,
    bids: bids,
    asks: asks,
    bestBid: bestBid,
    bestAsk: bestAsk,
    connectorOrderBook: kujiraOrderBook,
  } as OrderBook;
};

export const convertOfferDenomToOrderSide = (
  offer_denom: string,
  market: Market
): OrderSide => {
  const offerDenom = Denom.from(offer_denom);
  const baseTokenDenom = Denom.from(market.baseToken.id);
  const quoteTokenDenom = Denom.from(market.quoteToken.id);

  if (offerDenom.eq(baseTokenDenom)) {
    return OrderSide.SELL;
  } else if (offerDenom.eq(quoteTokenDenom)) {
    return OrderSide.BUY;
  } else {
    throw new Error('Order side from offer denom not recognized');
  }
};

export const convertKujiraOrderToStatus = (kujiraOrder: any): OrderStatus => {
  if (kujiraOrder['offer_amount'] == '0') {
    return OrderStatus.FILLED;
  } else if (
    kujiraOrder['offer_amount'] == kujiraOrder['original_offer_amount']
  ) {
    return OrderStatus.OPEN;
  } else {
    return OrderStatus.PARTIALLY_FILLED;
  }
};

export const convertKujiraFeeToFee = (kujiraFee: string) => {
  const fee = parseCoins(kujiraFee)[0];
  return BigNumber(fee.amount).multipliedBy(
    BigNumber('1e-' + KUJI.decimals.toString())
  );
};

export const convertKujiraOrdersToMapOfOrders = (options: {
  type: ConvertOrderType;
  bundles: IMap<string, any>;
}): IMap<OrderId, Order> => {
  const output = IMap<OrderId, Order>().asMutable();

  let unknownCounter = 1;
  if (ConvertOrderType.PLACE_ORDERS == options.type) {
    for (const bundle of options.bundles.get('orders').values()) {
      let orderId = bundle.getIn(['events', 'wasm', 'order_idx']);

      if (!orderId) {
        orderId = `unknown_${unknownCounter++}`;
      }

      const denom = Denom.from(bundle.getIn(['events', 'wasm', 'offer_denom']));

      const order = {
        id: orderId,
        clientId: bundle.getIn(['candidate']).clientId,
        marketName: bundle.getIn(['market']).name,
        marketId: bundle.getIn(['market']).id,
        market: bundle.getIn(['market']),
        ownerAddress:
          bundle.getIn(['candidate']).type == OrderType.MARKET
            ? bundle.getIn(['events', 'message', 'sender'])
            : bundle.getIn(['candidate']).type == OrderType.LIMIT
            ? bundle.getIn(['events', 'transfer', 'sender'])
            : undefined,
        payerAddress:
          bundle.getIn(['candidate']).type == OrderType.MARKET
            ? bundle.getIn(['events', 'message', 'sender'])
            : bundle.getIn(['candidate']).type == OrderType.LIMIT
            ? bundle.getIn(['events', 'transfer', 'sender'])
            : undefined,
        price: bundle.getIn(['events', 'wasm', 'quote_price'])
          ? BigNumber(bundle.getIn(['events', 'wasm', 'quote_price']))
          : BigNumber(bundle.getIn(['events', 'wasm-trade', 'quote_amount']))
              .div(
                BigNumber(bundle.getIn(['events', 'wasm-trade', 'base_amount']))
              )
              .decimalPlaces(bundle.getIn(['market', 'precision'])),
        amount: bundle.getIn(['events', 'wasm', 'offer_amount'])
          ? BigNumber(bundle.getIn(['events', 'wasm', 'offer_amount'])).div(
              BigNumber(10).pow(denom.decimals)
            )
          : undefined,
        side: convertOfferDenomToOrderSide(
          bundle.getIn(['events', 'wasm', 'offer_denom']),
          bundle.getIn(['market'])
        ),
        status: options.bundles.getIn(['common', 'status']),
        type: bundle.getIn(['candidate']).type || OrderType.LIMIT,
        fee: convertKujiraFeeToFee(
          options.bundles.getIn(['common', 'events', 'tx', 'fee']) as string
        ),
        creationTimestamp: undefined,
        fillingTimestamp: undefined,
        hashes: {
          creation: options.bundles.getIn([
            'common',
            'response',
            'transactionHash',
          ]),
        } as TransactionHashes,
        connectorOrder: bundle.getIn(['common', 'response']),
      } as Order;

      output.set(orderId, order);
    }
  } else if (ConvertOrderType.GET_ORDERS == options.type) {
    for (const bundle of options.bundles.get('orders')) {
      let orderId = bundle['idx'];

      if (!orderId) {
        orderId = `unknown_${unknownCounter++}`;
      }

      const market = options.bundles.getIn(['common', 'market']) as Market;

      const denom = Denom.from(bundle['offer_denom']['native']);

      const order = {
        id: orderId,
        clientId: undefined,
        marketName: market.name,
        marketId: market.id,
        market: market,
        ownerAddress: bundle['owner'],
        payerAddress: bundle['owner'],
        price: bundle['quote_price']
          ? BigNumber(bundle['quote_price'])
          : undefined,
        amount: bundle['original_offer_amount']
          ? BigNumber(bundle['original_offer_amount']).div(
              BigNumber(10).pow(denom.decimals)
            )
          : undefined,
        side: convertOfferDenomToOrderSide(
          bundle['offer_denom']['native'],
          market
        ),
        status: convertKujiraOrderToStatus(bundle),
        type: OrderType.LIMIT,
        fee: undefined,
        filling: {
          free: {
            token: undefined,
            amount: undefined,
          },
          filled: {
            token: undefined,
            amount: undefined,
          },
        } as unknown as OrderFilling,
        fillingTimestamp: undefined,
        creationTimestamp: Number(bundle['created_at']),
        hashes: undefined,
        connectorOrder: bundle,
      } as Order;

      if (
        [OrderStatus.PARTIALLY_FILLED, OrderStatus.FILLED].includes(
          getNotNullOrThrowError<OrderStatus>(order.status)
        )
      ) {
        const filling = getNotNullOrThrowError<OrderFilling>(order.filling);
        const freeToken =
          order.side == OrderSide.BUY
            ? order.market.quoteToken
            : order.market.baseToken;
        filling.free.token = freeToken;
        filling.free.amount = BigNumber(order.connectorOrder.offer_amount).div(
          BigNumber(10).pow(filling.free.token.decimals)
        );

        const filledToken =
          order.side == OrderSide.BUY
            ? order.market.baseToken
            : order.market.quoteToken;
        filling.filled.token = filledToken;
        filling.filled.amount = BigNumber(
          order.connectorOrder.filled_amount
        ).div(BigNumber(10).pow(filling.filled.token.decimals));
      }

      output.set(orderId, order);
    }
  } else if (ConvertOrderType.CANCELLED_ORDERS == options.type) {
    for (const bundle of options.bundles.get('orders').values()) {
      let orderId = bundle.getIn(['id']);

      if (!orderId) {
        orderId = `unknown_${unknownCounter++}`;
      }

      const order = {
        id: orderId,
        clientId: undefined,
        marketName: bundle.getIn(['market']).name,
        marketId: bundle.getIn(['market']).id,
        market: bundle.getIn(['market']),
        ownerAddress: options.bundles.getIn([
          'common',
          'events',
          'transfer',
          'sender',
        ]),
        payerAddress: options.bundles.getIn([
          'common',
          'events',
          'transfer',
          'sender',
        ]),
        price: undefined as unknown as OrderPrice,
        amount: undefined as unknown as OrderAmount,
        side: undefined as unknown as OrderSide,
        status: OrderStatus.CANCELLED,
        type: OrderType.LIMIT,
        fee: convertKujiraFeeToFee(
          options.bundles.getIn(['common', 'events', 'tx', 'fee']) as string
        ),
        creationTimestamp: undefined,
        fillingTimestamp: undefined,
        hashes: {
          cancellation: options.bundles.getIn([
            'common',
            'response',
            'transactionHash',
          ]),
        } as TransactionHashes,
        connectorOrder: bundle.getIn(['common', 'response']),
      } as Order;

      output.set(orderId, order);
    }
  }

  return output;
};

export const convertKujiraTickerToTicker = (
  source: string,
  input: any,
  market: Market,
  coinGeckTokens: any
): Ticker => {
  let price: BigNumber;
  const tokens: any = {};

  if (source === TickerSource.ORDER_BOOK_SAP) {
    price = BigNumber(input.price);
  } else if (source === TickerSource.COINGECKO) {
    if (!coinGeckTokens['base'] || !coinGeckTokens['base']) {
      tokens[market.baseToken.symbol] = BigNumber(0);
      tokens[market.quoteToken.symbol] = BigNumber(0);
      price = BigNumber(0);
    } else {
      tokens[market.baseToken.symbol] = BigNumber(
        input[coinGeckTokens['base']]['usd']
      );
      tokens[market.quoteToken.symbol] = BigNumber(
        input[coinGeckTokens['quote']]['usd']
      );

      if (tokens[market.quoteToken.symbol].gt(BigNumber(0))) {
        price = tokens[market.baseToken.symbol].div(
          tokens[market.quoteToken.symbol]
        );
      } else {
        price = BigNumber(0);
      }
    }
  } else {
    throw new Error('Not implemented.');
  }

  const timestamp = Date.now();

  return {
    market: market,
    price: price,
    timestamp: timestamp,
    tokens: tokens,
  };
};

export const convertCoinGeckoQuotationsToQuotations = (
  input: any,
  tokensSymbolsToTokensIdsMap: GetTokenSymbolsToTokenIdsMapResponse,
  kujiraSymbolsToCoinGeckoIdsMap: GetKujiraTokenSymbolsToCoinGeckoTokenIdsMapResponse
): IMap<TokenId, Price> => {
  const output = IMap<TokenId, Price>().asMutable();

  for (const [tokenSymbol, tokenId] of tokensSymbolsToTokensIdsMap.entries()) {
    const coinGeckoId = kujiraSymbolsToCoinGeckoIdsMap.get(tokenSymbol);

    if (coinGeckoId) {
      output.set(tokenId, BigNumber(input[coinGeckoId]['usd']));
    } else {
      output.set(tokenId, BigNumber(0));
    }
  }

  return output;
};

export const convertKujiraBalancesToBalances = async (
  balances: readonly Coin[],
  orders: IMap<OrderId, Order>,
  quotations: IMap<TokenId, Price>
): Promise<Balances> => {
  const output: Balances = {
    tokens: IMap<TokenId, TokenBalance>().asMutable(),
    total: {
      free: BigNumber(0),
      lockedInOrders: BigNumber(0),
      unsettled: BigNumber(0),
      total: BigNumber(0),
    },
  };

  for (const balance of balances) {
    const token = convertKujiraTokenToToken(Denom.from(balance.denom));

    if (!token.symbol.startsWith('x')) {
      let quotation = BigNumber(0);

      quotation = getNotNullOrThrowError<BigNumber>(quotations.get(token.id));

      const freeAmount = BigNumber(balance.amount).div(
        BigNumber(10).pow(token.decimals)
      );

      output.tokens.set(token.id, {
        token: token,
        free: BigNumber(0),
        lockedInOrders: BigNumber(0),
        unsettled: BigNumber(0),
        total: BigNumber(0),
        inUSD: {
          quotation: BigNumber(0),
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
          total: BigNumber(0),
        },
      });

      const tokenBalance = getNotNullOrThrowError<TokenBalance>(
        output.tokens.get(token.id)
      );
      tokenBalance.free = freeAmount;
      tokenBalance.inUSD.quotation = quotation;
      tokenBalance.inUSD.free = freeAmount.multipliedBy(quotation);
    }
  }

  for (const order of orders.values()) {
    const freeToken: Token =
      order.side == OrderSide.BUY
        ? order.market.quoteToken
        : order.market.baseToken;
    const filledToken: Token =
      order.side == OrderSide.BUY
        ? order.market.baseToken
        : order.market.quoteToken;

    let freeAmount: Amount = BigNumber(0);
    let filledAmount: Amount = BigNumber(0);

    const freeQuotation = getNotNullOrThrowError<BigNumber>(
      quotations.get(freeToken.id)
    );

    const filledQuotation = getNotNullOrThrowError<BigNumber>(
      quotations.get(filledToken.id)
    );

    const filling = getNotNullOrThrowError<OrderFilling>(order.filling);
    if (order.status == OrderStatus.OPEN) {
      freeAmount = BigNumber(order.amount);
    } else if (order.status == OrderStatus.PARTIALLY_FILLED) {
      freeAmount = getNotNullOrThrowError<BigNumber>(filling.free.amount);
      filledAmount = getNotNullOrThrowError<BigNumber>(filling.filled.amount);
    } else if (order.status == OrderStatus.FILLED) {
      filledAmount = getNotNullOrThrowError<BigNumber>(filling.filled.amount);
    } else {
      throw Error('Unrecognized order status.');
    }

    for (const token of [freeToken, filledToken]) {
      if (!output.tokens.has(token.id)) {
        output.tokens.set(token.id, {
          token: token,
          free: BigNumber(0),
          lockedInOrders: BigNumber(0),
          unsettled: BigNumber(0),
          total: BigNumber(0),
          inUSD: {
            quotation: BigNumber(0),
            free: BigNumber(0),
            lockedInOrders: BigNumber(0),
            unsettled: BigNumber(0),
            total: BigNumber(0),
          },
        });
      }
    }

    const freeTokenBalance = getNotNullOrThrowError<TokenBalance>(
      output.tokens.get(freeToken.id)
    );
    freeTokenBalance.inUSD.quotation = freeQuotation;
    freeTokenBalance.lockedInOrders =
      freeTokenBalance.lockedInOrders.plus(freeAmount);
    freeTokenBalance.inUSD.lockedInOrders =
      freeTokenBalance.inUSD.lockedInOrders.plus(
        freeAmount.multipliedBy(freeQuotation)
      );

    const filledTokenBalance = getNotNullOrThrowError<TokenBalance>(
      output.tokens.get(filledToken.id)
    );
    filledTokenBalance.inUSD.quotation = filledQuotation;
    filledTokenBalance.unsettled =
      filledTokenBalance.unsettled.plus(filledAmount);
    filledTokenBalance.inUSD.unsettled =
      filledTokenBalance.inUSD.unsettled.plus(
        filledAmount.multipliedBy(filledQuotation)
      );
  }

  let allFreeBalancesSum = BigNumber(0);
  let allLockedInOrdersBalancesSum = BigNumber(0);
  let allUnsettledBalancesSum = BigNumber(0);

  for (const tokenBalance of output.tokens.valueSeq()) {
    tokenBalance.total = tokenBalance.total
      .plus(tokenBalance.free)
      .plus(tokenBalance.lockedInOrders)
      .plus(tokenBalance.unsettled);

    tokenBalance.inUSD.total = tokenBalance.inUSD.total
      .plus(tokenBalance.inUSD.free)
      .plus(tokenBalance.inUSD.lockedInOrders)
      .plus(tokenBalance.inUSD.unsettled);

    allFreeBalancesSum = allFreeBalancesSum.plus(tokenBalance.inUSD.free);
    allLockedInOrdersBalancesSum = allLockedInOrdersBalancesSum.plus(
      tokenBalance.inUSD.lockedInOrders
    );
    allUnsettledBalancesSum = allUnsettledBalancesSum.plus(
      tokenBalance.inUSD.unsettled
    );
  }

  output.total.free = output.total.free.plus(allFreeBalancesSum);
  output.total.lockedInOrders = output.total.lockedInOrders.plus(
    allLockedInOrdersBalancesSum
  );
  output.total.unsettled = output.total.unsettled.plus(allUnsettledBalancesSum);
  output.total.total = output.total.total
    .plus(output.total.free)
    .plus(output.total.lockedInOrders)
    .plus(output.total.unsettled);

  return output;
};

export const convertKujiraTransactionToTransaction = (
  input: IndexedTx
): Transaction => {
  return {
    hash: input.hash,
    blockNumber: input.height,
    gasUsed: input.gasUsed,
    gasWanted: input.gasWanted,
    code: input.code,
    data: new TextDecoder('utf-8').decode(input.tx),
  };
};

export const convertKujiraSettlementToSettlement = (
  input: KujiraWithdraw,
  quotations: IMap<TokenId, Price>,
  market: Market
): Withdraws => {
  const events = convertKujiraRawLogEventsToMapOfEvents([
    { msg_index: 'events', events: input['events'] },
  ]);

  const nativeToken = getNotNullOrThrowError<any>(
    (events.getIn(['events', 'tx', 'fee']) as string).match(/^(\d+)(.*)/)
  );

  const transferEventFeeAmountArray: any = events.getIn([
    'events',
    'transfer',
    'amount',
  ]);

  const tokenFees = {
    base: {
      tokenId: market.base.id,
      feeAmount: BigNumber(0),
    },
    quote: {
      tokenId: market.quote.id,
      feeAmount: BigNumber(0),
    },
    native: {
      tokenId: nativeToken[2],
      feeAmount: BigNumber(0),
    },
  };

  for (const transferEventFee of transferEventFeeAmountArray) {
    const tokenIdFromFeeMatch = transferEventFee.match(/^(\d+)(.*)/);

    if (tokenIdFromFeeMatch[2] == market.base.id) {
      tokenFees.base.feeAmount = tokenFees.base.feeAmount.plus(
        BigNumber(parseInt(tokenIdFromFeeMatch[1]))
      );
    } else if (tokenIdFromFeeMatch[2] == market.quote.id) {
      tokenFees.quote.feeAmount = tokenFees.quote.feeAmount.plus(
        BigNumber(parseInt(tokenIdFromFeeMatch[1]))
      );
    }
  }

  if (market.base.id != nativeToken[2] && market.quote.id != nativeToken[2]) {
    tokenFees.native.feeAmount = tokenFees.native.feeAmount.plus(
      BigNumber(parseInt(nativeToken[1]))
    );
  }

  const tokenWithdraw = IMap<TokenId, Withdraw>().asMutable();

  const withdraws = {
    hash: input.transactionHash,
    tokens: tokenWithdraw,
    total: {
      fees: BigNumber(0),
    },
  } as Withdraws;

  for (const tokenFee of Object.values(tokenFees)) {
    const denom = Denom.from(tokenFee.tokenId);
    const token = convertKujiraTokenToToken(denom);

    const amount = getNotNullOrThrowError<BigNumber>(
      tokenFee.feeAmount.multipliedBy(Math.pow(10, -denom.decimals))
    );

    if (amount.gt(BigNumber(0))) {
      const quotation = getNotNullOrThrowError<BigNumber>(
        quotations.get(token.id)
      );

      const amountInUSD = amount.multipliedBy(quotation);

      if (!tokenWithdraw.has(token.id)) {
        tokenWithdraw.set(token.id, {
          fees: {
            token: amount,
            USD: amountInUSD,
            quotation: quotation,
          },
          token: token,
        } as Withdraw);
      } else {
        const tokenData = getNotNullOrThrowError<any>(
          tokenWithdraw.get(token.id)
        );

        tokenWithdraw.set(token.id, {
          fees: {
            token: tokenData.fees.token.plus(amount),
            USD: tokenData.fees.USD.plus(amountInUSD),
            quotation: quotation,
          },
          token: token,
        } as Withdraw);
      }

      withdraws.total.fees = withdraws.total.fees.plus(amountInUSD);
    }
  }

  return withdraws;
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

export const convertKujiraEventsToMapOfEvents = (
  events: readonly KujiraEvent[]
): IMap<string, any> => {
  const output = IMap<string, any>().asMutable();

  for (const event of events) {
    for (const attribute of event.attributes) {
      if (!output.getIn([event.type, attribute.key])) {
        output.setIn([event.type, attribute.key], attribute.value);
      }
    }
  }

  return output;
};

export const convertKujiraRawLogEventsToMapOfEvents = (
  eventsLog: Array<any>,
  cancelManyOrderNumber?: number
): IMap<string, any> => {
  if (cancelManyOrderNumber) {
    let msgIndex = (eventsLog[0]['msg_index'] as number) + 1;
    for (let i = 0; i < cancelManyOrderNumber - 1; i++) {
      const newEventLog = { ...eventsLog[0] };
      newEventLog['msg_index'] = msgIndex;
      eventsLog.push(newEventLog);
      msgIndex = msgIndex + 1;
    }
  }
  const output = IMap<string, any>().asMutable();
  for (const eventLog of eventsLog) {
    const bundleIndex = eventLog['msg_index'];
    const events = eventLog['events'];
    const transferTokenAmountArray = [];

    let feePayer: any = undefined;

    const txEventArray = events.filter((item: any) => item.type == 'tx');

    for (const txEvent of txEventArray) {
      const txFeePayer = txEvent.attributes.find(
        (attribute: any) => attribute.key == 'fee_payer'
      );
      if (txFeePayer != undefined && feePayer == undefined) {
        feePayer = txFeePayer.value;
      }
    }

    const transferEventArray = events.filter(
      (item: any) => item.type == 'transfer'
    );

    for (const transferEvent of transferEventArray) {
      let recipient = transferEvent.attributes.find(
        (attribute: any) => attribute.key == 'recipient'
      );

      if (recipient != undefined) {
        recipient = recipient.value;
      }

      if (feePayer != recipient) {
        const transferAmounts = transferEvent.attributes
          .find((attribute: any) => attribute.key == 'amount')
          .value.split(',');

        for (const transferAmount of transferAmounts) {
          if (transferAmount != undefined) {
            transferTokenAmountArray.push(transferAmount);
          }
        }
      }
    }

    for (const event of events) {
      if (event.type != 'transfer') {
        for (const attribute of event.attributes) {
          output.setIn(
            [bundleIndex, event.type, attribute.key],
            attribute.value
          );
        }
      }
    }

    output.setIn([bundleIndex, 'transfer', 'amount'], transferTokenAmountArray);
  }

  return output;
};

export const convertToResponseBody = (input: any): any => {
  let output = input;

  if (IMap.isMap(input)) output = input.toJS();
  for (const key in output) {
    if (IMap.isMap(output[key])) {
      output[key] = output[key].toJS();
    }
  }

  return output;
};

export function convertNonStandardKujiraTokenIds(
  tokensIds: TokenId[]
): TokenId[] {
  const output: TokenId[] = [];

  for (const tokenId of tokensIds) {
    if (tokenId.startsWith('ibc')) {
      const denom = Denom.from(tokenId);

      if (denom.trace && denom.trace.base_denom) {
        output.push(
          getNotNullOrThrowError<string>(denom.trace?.base_denom).replace(
            ':',
            '/'
          )
        );
      }
    }
  }

  return output;
}
