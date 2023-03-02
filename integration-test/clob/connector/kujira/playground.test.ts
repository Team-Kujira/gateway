import 'jest-extended';

jest.setTimeout(30 * 60 * 1000);

describe('Kujira Playground', async () => {
  describe('Markets', async () => {
    it('Get one market', async () => {
      console.log('');
    });

    it('Get two markets', async () => {
      console.log('');
    });

    it('Get all markets', async () => {
      console.log('');
    });
  });

  describe('Order books', async () => {
    it('Get one order book', async () => {
      console.log('');
    });

    it('Get two order books for two different markets', async () => {
      console.log('');
    });

    it('Get all order books', async () => {
      console.log('');
    });
  });

  describe('Tickers', async () => {
    it('Get one ticker', async () => {
      console.log('');
    });

    it('Get two tickers for two different markets', async () => {
      console.log('');
    });

    it('Get all tickers', async () => {
      console.log('');
    });
  });

  describe('Orders', async () => {
    /*
    Full flow for testing orders
    =============================
    market 1: token1/token2
    market 2: token1/token3
    market 3: token2/token3

    get the available wallet balances from the tokens 1, 2, and 3

    create a buy order 1 for market 1

    check the available wallet balances from the tokens 1 and 2

    get the open order 1

    create a sell order 2 for market 2

    check the available wallet balances from the tokens 1 and 2

    get the open order 2

    create 7 orders at once as the following:
      order 3, buy, market 1
      order 4, sell, market 1
      order 5, buy, market 2
      order 6, sell, market 2
      order 7, buy, market 3
      order 8, sell, market 3
      order 9, buy, market 3

    check the wallet balances from the tokens 1, 2, and 3

    get the open orders 6 and 7

    get all open orders

    cancel the order 1

    check the wallet balances from the tokens 1 and 2

    check that it's not possible to get the canceled order 1

    get all open orders and check that order 1 is missing

    cancel the orders 3, 4, and 5 from markets 1 and 2

    check the wallet balances from the tokens 1, 2, and 3

    check that it's not possible to get the canceled orders 3, 4, and 5 from the markets 1 and 2

    get all open orders and check that the orders 1, 3, 4, and 5 are missing

    force the filling of order 2

    check the wallet balances from the tokens 1 and 2

    get filled order 2

    get all filled orders and check that order 2 is present

    get all open orders and check that the orders 1, 2, 3, 4, and 5 are missing

    get all orders (open or filled) and check that the order 2 is present

    force filling of order 6, 7

    check the wallet balances from the tokens 1, 2, and 3

    get filled orders 6, 7

    get all filled orders and check that the orders 2, 6, and 7 are present

    get all open orders and check that the orders 1, 2, 3, 4, 5, 6, and 7 are missing

    get all orders (open or filled) and check that the orders 2, 6, and 7 are present

    cancel all the open orders

    check the wallet balances from the tokens 2 and 3

    get all open orders and check that there are no open orders

    get all orders (open or filled) and check that the orders 2, 6, and 7 are present

    create 2 orders at once as the following:
      order 10, buy, market 1
      order 11, sell, market 2

    get all open orders and check that the orders 10 and 11 are present

    get all orders (open or filled) and check that the orders 2, 6, 7, 10, and 11 are present

    cancel all the open orders

    check the wallet balances from the tokens 2 and 3

    get all open orders and check that there are no open orders
    */

    it('Create one sell order', async () => {
      console.log('');
    });

    it('Create one buy order', async () => {
      console.log('');
    });

    it('Create three orders in different markets', async () => {
      console.log('');
    });

    it('Get all tickers', async () => {
      console.log('');
    });
  });
});
