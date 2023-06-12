import { StatusCodes } from 'http-status-codes';
import { HttpException } from '../../services/error-handler';
import {
  isFloatString,
  isNaturalNumberString,
} from '../../services/validators';
import { OrderSide, OrderType, OrderStatus } from './kujira.types';

type Validator = <Item>(
  item: undefined | null | any | Item,
  index?: number
) => { warnings: Array<string>; errors: Array<string> };

type RequestValidator = <Item>(item: undefined | null | any | Item) => {
  warnings: Array<string>;
  errors: Array<string>;
};

const createValidator = <Item, Value>(
  accessor: undefined | null | string | ((target: any | Item) => any | Value),
  validation: (
    item: undefined | null | any | Item,
    value: undefined | null | any | Value
  ) => boolean,
  error:
    | string
    | ((
        item: undefined | null | any | Item,
        value: undefined | null | any | Value,
        accessor:
          | undefined
          | null
          | string
          | ((target: any | Item) => any | Value),
        index?: number
      ) => string),
  optional: boolean = false
): Validator => {
  return (item: undefined | null | any | Item, index?: number) => {
    const warnings: Array<string> = [];
    const errors: Array<string> = [];

    let target: any | Value;
    if (item === undefined && accessor) {
      errors.push(`Request with undefined value informed when it shouldn't.`);
    } else if (item === null && accessor) {
      errors.push(`Request with null value informed when it shouldn't.`);
    } else if (!accessor) {
      target = item;
    } else if (typeof accessor === 'string') {
      if (!(`${accessor}` in item) && !optional) {
        errors.push(`The request is missing the key/property "${accessor}".`);
      } else {
        target = item[accessor];
      }
    } else {
      target = accessor(item);
    }

    if (!validation(item, target)) {
      if (typeof error === 'string') {
        if (optional) {
          warnings.push(error);
        } else {
          errors.push(error);
        }
      } else {
        if (optional) {
          warnings.push(error(item, target, accessor, index));
        } else {
          errors.push(error(item, target, accessor, index));
        }
      }
    }

    return {
      warnings,
      errors,
    };
  };
};

// TODO Enable the validators!!!

export const createRequestValidator = (
  validators: Array<Validator>,
  statusCode?: StatusCodes,
  headerMessage?: (request: any) => string,
  errorNumber?: number
): RequestValidator => {
  return <Item>(request: undefined | null | any | Item) => {
    let warnings: Array<string> = [];
    let errors: Array<string> = [];

    for (const validator of validators) {
      const result = validator(request);
      warnings = [...warnings, ...result.warnings];
      errors = [...errors, ...result.errors];
    }

    throwIfErrorsExist(errors, statusCode, request, headerMessage, errorNumber);

    return { warnings, errors };
  };
};

export const createBatchValidator = <Item>(
  validators: Array<Validator>,
  headerItemMessage?: (
    item: undefined | null | any | Item,
    index?: number
  ) => string,
  accessor:
    | undefined
    | null
    | string
    | ((target: any | Item) => any) = undefined
): ((input: any[]) => { warnings: Array<string>; errors: Array<string> }) => {
  return (input: any[]) => {
    let warnings: Array<string> = [];
    let errors: Array<string> = [];

    let items: any[] = [];
    if (input === undefined && accessor) {
      errors.push(`Request with undefined value informed when it shouldn't.`);
    } else if (input === null && accessor) {
      errors.push(`Request with null value informed when it shouldn't.`);
    } else if (!accessor) {
      items = input;
    } else if (typeof accessor === 'string') {
      if (!(`${accessor}` in input)) {
        errors.push(`The request is missing the key/property "${accessor}".`);
      } else {
        items = input[accessor as any];
      }
    } else {
      items = accessor(input);
    }

    let index = 0;
    for (const item of items) {
      for (const validator of validators) {
        const itemResult = validator(item, index);

        if (itemResult.warnings && itemResult.warnings.length > 0) {
          if (headerItemMessage) warnings.push(headerItemMessage(item, index));
        }

        if (itemResult.errors && itemResult.errors.length > 0) {
          if (headerItemMessage) errors.push(headerItemMessage(item, index));
        }

        warnings = [...warnings, ...itemResult.warnings];
        errors = [...errors, ...itemResult.errors];
      }
      index++;
    }

    return { warnings, errors };
  };
};

/**
 Throw an error because the request parameter is malformed, collect all the
 errors related to the request to give the most information possible
 */
export const throwIfErrorsExist = (
  errors: Array<string>,
  statusCode: number = StatusCodes.NOT_FOUND,
  request: any,
  headerMessage?: (request: any, errorNumber?: number) => string,
  errorNumber?: number
): void => {
  if (errors.length > 0) {
    let message = headerMessage
      ? `${headerMessage(request, errorNumber)}\n`
      : '';
    message += errors.join('\n');

    throw new HttpException(statusCode, message);
  }
};

export const validateOrderClientId: Validator = createValidator(
  null,
  (target, _) =>
    typeof target === 'object' ? isNaturalNumberString(target.id) : target,
  (target, _) => {
    const id = typeof target === 'object' ? target.id : target;
    return `Invalid client id (${id}), it needs to be in big number format.`;
  },
  true
);

export const validateOrderClientIds: Validator = createValidator(
  'ids',
  (_, values) => {
    let ok = true;
    values === undefined
      ? (ok = true)
      : values.map((item: any) => (ok = isNaturalNumberString(item) && ok));
    return ok;
  },
  `Invalid client ids, it needs to be an array of big numbers.`,
  true
);

export const validateOrderExchangeId: Validator = createValidator(
  null,
  (target, _) =>
    typeof target == 'object' && 'exchangeOrderId' in target
      ? isNaturalNumberString(target.exchangeOrderId)
      : target,
  (target, _) => {
    const id = typeof target == 'object' ? target.exchangeOrderId : target;
    return `Invalid exchange id (${id}), it needs to be in big number format.`;
  },
  true
);

export const validateOrderExchangeIds: Validator = createValidator(
  'exchangeOrderIds',
  (_, values) => {
    let ok = true;
    values === undefined
      ? (ok = true)
      : values.map((item: any) => (ok = isNaturalNumberString(item) && ok));
    return ok;
  },
  `Invalid exchange ids, it needs to be an array of big numbers.`,
  true
);

export const validateOrderMarketName: Validator = createValidator(
  'marketName',
  (_, value) => value.trim().length,
  (_, value) => `Invalid market name (${value}).`,
  true
);

export const validateOrderMarketNames: Validator = createValidator(
  'marketNames',
  (_, values) => {
    let ok = true;
    values === undefined
      ? (ok = true)
      : values.map((item: any) => (ok = item.trim().length && ok));
    return ok;
  },
  `Invalid market names, it needs to be an array of strings.`,
  true
);

export const validateOrderMarketId: Validator = createValidator(
  'marketId',
  (_, value) => value.trim().length && value.trim().slice(0, 6) === 'kujira',
  (_, value) => `Invalid market id (${value}).`,
  false
);

export const validateAllMarketIds: Validator = createValidator(
  'marketIds',
  (_, values) => {
    let ok = true;
    values === undefined
      ? (ok = true)
      : values.map(
          (item: any) =>
            (ok = item.trim().length && item.trim().slice(0, 6) === 'kujira')
        );
    return ok;
  },
  `Invalid market ids, it needs to be an array of strings.`,
  true
);

export const validateOrderOwnerAddress: Validator = createValidator(
  'ownerAddress',
  (_, value) => /^kujira[a-z0-9]{39}$/.test(value),
  (_, value) => `Invalid owner address (${value}).`,
  false
);

export const validateOrderOwnerAddresses: Validator = createValidator(
  'ownerAddresses',
  (_, values) => {
    let ok = true;
    values === undefined
      ? (ok = true)
      : values.map((item: any) => /^kujira[a-z0-9]{39}$/.test(item));
    return ok;
  },
  `Invalid owner addresses...`,
  true
);

export const validateOrderSide: Validator = createValidator(
  'side',
  (_, value) =>
    value &&
    (Object.values(OrderSide) as string[])
      .map((i) => i.toLowerCase())
      .includes(value.toLowerCase()),
  (_, value) => `Invalid order side (${value}).`,
  false
);

export const validateOrderPrice: Validator = createValidator(
  'price',
  (_, value) =>
    typeof value === 'undefined'
      ? true
      : typeof value === 'number' || isFloatString(value),
  (_, value) => `Invalid order price (${value}).`,
  true
);

export const validateOrderAmount: Validator = createValidator(
  'amount',
  (_, value) => typeof value === 'number' || isFloatString(value),
  (_, value) => `Invalid order amount (${value}).`,
  false
);

export const validateOrderType: Validator = createValidator(
  'type',
  (_, value) =>
    value === undefined
      ? true
      : Object.values(OrderType)
          .map((item) => item.toLowerCase())
          .includes(value.toLowerCase()),
  (_, value) => `Invalid order type (${value}).`,
  false
);

export const validateOrderStatus: Validator = createValidator(
  'status',
  (_, value) =>
    value === undefined ? true : Object.values(OrderStatus).includes(value),
  (_, value) => `Invalid order(s) status (${value}).`,
  false
);

export const validateOrderStatuses: Validator = createValidator(
  'statuses',
  (_, values) =>
    values === undefined ? true : Object.values(OrderStatus).includes(values),
  (_, values) => `Invalid order(s) status (${values}).`,
  false
);

export const validateGetTokenRequest: RequestValidator = createRequestValidator(
  [
    createValidator(
      null,
      (request) => request.id || request.name || request.symbol,
      `No token was informed. If you want to get a token, please inform the parameter "id".`,
      false
    ),
  ],
  StatusCodes.BAD_REQUEST
);

export const validateGetTokensRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.names && request.names.length) ||
          (request.ids && request.ids.length) ||
          (request.symbols && request.symbols.length),
        `No tokens were informed. If you want to get all tokens, please do not inform the parameter "names" or "ids".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllTokensRequest: RequestValidator =
  createRequestValidator(
    [createValidator(null, (_request) => true, ``, false)],
    StatusCodes.BAD_REQUEST
  );

export const validateGetMarketRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => request.id || request.name,
        `No market was informed. If you want to get a market, please inform the parameter "name".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetMarketsRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.ids && request.ids.length) ||
          (request.names && request.names.length),
        `No markets were informed. If you want to get all markets, please do not inform the parameter "names".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllMarketsRequest: RequestValidator =
  createRequestValidator(
    [createValidator(null, (_request) => true, ``, false)],
    StatusCodes.BAD_REQUEST
  );

export const validateGetOrderBookRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => request.marketId || request.marketName,
        `No market name was informed. If you want to get an order book, please inform the parameter "marketId".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetOrderBooksRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.marketIds && request.marketIds.length) ||
          (request.marketNames && request.marketNames.length),
        `No market names were informed. If you want to get all order books, please do not inform the parameter "marketIds".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllOrderBooksRequest: RequestValidator =
  createRequestValidator(
    [createValidator(null, (_request) => true, ``, false)],
    StatusCodes.BAD_REQUEST
  );

export const validateGetTickerRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => request.marketId || request.marketName,
        `No market name was informed. If you want to get a ticker, please inform the parameter "marketId".`,
        false
      ),
      createValidator(
        null,
        (request) => {
          if (request.marketId) {
            createRequestValidator([validateOrderMarketId]);
            return request.marketId;
          } else if (request.marketName) {
            createRequestValidator([validateOrderMarketName]);
            return request.marketName;
          }
        },
        `No market informed. Informe a market id or market name.`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetTickersRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.marketIds && request.marketIds.length) ||
          (request.marketNames && request.marketNames.length),
        `No market names were informed. If you want to get all tickers, please do not inform the parameter "marketIds".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllTickersRequest: RequestValidator =
  createRequestValidator(
    [createValidator(null, (_request) => true, ``, false)],
    StatusCodes.BAD_REQUEST
  );

export const validateGetBalanceRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.tokenId && request.ownerAddress) ||
          (request.tokenSymbol && request.ownerAddress),
        `No market name was informed. If you want to get a balance, please inform the parameter "marketId".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetBalancesRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) =>
          (request.tokenIds && request.ownerAddress) ||
          (request.tokenSymbols && request.ownerAddress),
        `No market names were informed. If you want to get all balances, please do not inform the parameter "marketIds".`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllBalancesRequest: RequestValidator =
  createRequestValidator(
    [createValidator(null, (_request) => true, ``, false)],
    StatusCodes.BAD_REQUEST
  );

export const validateGetOrderRequest: RequestValidator = createRequestValidator(
  [
    validateOrderClientId,
    validateOrderExchangeId,
    createValidator(
      null,
      (request) =>
        !(
          request &&
          request.id === undefined &&
          request.exchangeOrderId === undefined
        ),
      `No client id or exchange id were informed.`,
      false
    ),
    // validateOrderMarketName,
    validateOrderOwnerAddress,
  ],
  StatusCodes.BAD_REQUEST,
  (request) => `Error when trying to get order "${request.id}"`
);

export const validateGetOrdersRequest: RequestValidator =
  createRequestValidator(
    [
      validateOrderOwnerAddress,
      validateOrderExchangeId,
      createValidator(
        null,
        (values) => (values.ids && values.ids.length) || values.ownerAddress,
        `No orders were informed.`,
        false
      ),
      createBatchValidator(
        [
          validateOrderClientId,
          createValidator(
            null,
            (request) =>
              request ||
              request.ids === undefined ||
              request.exchangeOrderIds === undefined,
            `No client ids or exchange ids were informed.`,
            true
          ),
        ],
        (_, index) => `Invalid get orders request at position ${index}:`,
        'ids'
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateGetAllOrdersRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => {
          if (request.ownerAddress) {
            createRequestValidator([validateOrderOwnerAddress]);
            return request.ownerAddress;
          } else if (request.ownerAddresses) {
            createRequestValidator([validateOrderOwnerAddresses]);
            return request.ownerAddresses;
          }
        },
        `No owner address informed.`,
        true
      ),
      createValidator(
        null,
        (request) => {
          if (request.status) {
            createRequestValidator([validateOrderStatus]);
            return request.status;
          } else if (request.statuses) {
            createRequestValidator([validateOrderStatuses]);
            return request.marketIds;
          }
        },
        `No order status informed.`,
        true
      ),
      createValidator(
        null,
        (request) => {
          if (request.marketId) {
            createRequestValidator([validateOrderMarketId]);
            return request.marketId;
          } else if (request.marketIds) {
            createRequestValidator([validateAllMarketIds]);
            return request.marketIds;
          } else if (request.marketName) {
            createRequestValidator([validateOrderMarketName]);
            return request.marketName;
          } else if (request.marketNames) {
            createRequestValidator([validateOrderMarketNames]);
            return request.marketNames;
          }
        },
        `No market informed. Informe a market id or market name.`,
        true
      ),
    ],
    StatusCodes.BAD_REQUEST,
    (request) =>
      `Error when trying to get all orders for markets "${request.marketId} ? "${request.marketId} : "${request.marketId} "`
  );

export const validatePlaceOrderRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => {
          if (request.marketId) {
            createRequestValidator([validateOrderMarketId]);
            return request.marketId;
          } else if (request.marketName) {
            createRequestValidator([validateOrderMarketName]);
            return request.marketName;
          }
        },
        `No market informed. Informe a market id or market name.`,
        false
      ),
      // validateOrderMarketName || validateOrderMarketId,
      validateOrderOwnerAddress,
      validateOrderSide,
      validateOrderPrice,
      validateOrderAmount,
      validateOrderType,
    ],
    StatusCodes.BAD_REQUEST,
    (request) => `Error when trying to create order "${request.id}"`
  );

export const validatePlaceOrdersRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => request.orders && request.orders.length,
        `No orders were informed.`,
        false
      ),
      validateOrderOwnerAddress ||
        createBatchValidator(
          [validateOrderOwnerAddress],
          (index) => `No ownerAddress were informed in the order "${index}`,
          'orders'
        ),
      createBatchValidator(
        [
          createValidator(
            null,
            (order) => {
              if (order.marketId) {
                createBatchValidator(
                  [validateOrderMarketId],
                  (item) => `Invalid marketId at order ${item}`,
                  '[order]'
                );
                return order.marketId;
              } else if (order.marketName) {
                createBatchValidator(
                  [validateOrderMarketName],
                  (item) => `Invalid marketId at order ${item}`,
                  '[order]'
                );
                return order.marketName;
              }
            },
            `No market informed for any orders...`,
            false
          ),
        ],
        (index) => `No market name were informed in the order "${index}`,
        'orders'
      ),
      createBatchValidator(
        [
          validateOrderSide,
          validateOrderPrice,
          validateOrderAmount,
          validateOrderType,
        ],
        (index) => `Invalid order request body  at position ${index}`,
        'orders'
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateCancelOrderRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => request.marketId,
        `No market id were informed. Not optional.`,
        false
      ),
      validateOrderMarketId,
      validateOrderExchangeId,
      validateOrderOwnerAddress,
    ],
    StatusCodes.BAD_REQUEST,
    (request) => `Error when trying to cancel order "${request.id}"`
  );

export const validateCancelOrdersRequest: RequestValidator =
  createRequestValidator(
    [
      validateOrderMarketId,
      createValidator(
        null,
        (values) => values && values.ids,
        `No orders were informed.`,
        false
      ),
      createValidator(
        null,
        (request) => {
          createRequestValidator([
            createBatchValidator(
              [validateOrderExchangeIds],
              (_, index) =>
                `Invalid cancel orders request at position ${index}:`,
              null
            ),
          ]);
          return request.ids;
        },
        `No orders ids informed.`,
        false
      ),
      createValidator(
        null,
        (request) => {
          if (request.marketIds) {
            createRequestValidator([validateAllMarketIds]);
            return request.marketIds;
          }
        },
        `No market informed..`,
        true
      ),
      createValidator(
        null,
        (request) => {
          if (request.ownerAddress) {
            createRequestValidator([validateOrderOwnerAddress]);
            return request.ownerAddress;
          } else if (request.ownerAddresses) {
            createRequestValidator([validateOrderOwnerAddresses]);
            return request.ownerAddresses;
          }
        },
        `Nothing owner address informed.`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateCancelAllOrdersRequest: RequestValidator =
  createRequestValidator(
    [
      createValidator(
        null,
        (request) => {
          if (request.ownerAddress) {
            createRequestValidator([validateOrderOwnerAddress]);
            return request.ownerAddress;
          } else if (request.ownerAddresses) {
            createRequestValidator([validateOrderOwnerAddresses]);
            return request.ownerAddresses;
          }
        },
        `Nothing owner address informed.`,
        false
      ),
    ],
    StatusCodes.BAD_REQUEST
  );

export const validateSettleMarketFundsRequest: RequestValidator =
  createRequestValidator(
    [validateOrderMarketName, validateOrderOwnerAddress],
    StatusCodes.BAD_REQUEST,
    (request) =>
      `Error when trying to settle funds for market "${request.marketId}."`
  );

export const validateSettleMarketsFundsRequest: RequestValidator =
  createRequestValidator(
    [validateOrderMarketNames, validateOrderOwnerAddress],
    StatusCodes.BAD_REQUEST
  );

export const validateSettleAllMarketsFundsRequest: RequestValidator =
  createRequestValidator([validateOrderOwnerAddress], StatusCodes.BAD_REQUEST);

export const validateGetWalletPublicKeyRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);

export const validateGetWalletsPublicKeysRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);

export const validateGetTransactionRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);

export const validateGetTransactionsRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);

export const validateGetCurrentBlockRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);

export const validateGetEstimatedFeesRequest: RequestValidator =
  createRequestValidator([], StatusCodes.BAD_REQUEST);
