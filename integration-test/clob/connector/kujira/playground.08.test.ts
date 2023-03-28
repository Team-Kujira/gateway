import 'jest-extended';
import { convertKujiraEvents } from '../../../../src/connectors/kujira/kujira.convertors';

jest.setTimeout(30 * 60 * 1000);

it('Kujira Playground', async () => {
  const response =
    await require('./responses/create-a-buy-order-1-for-market-1.json');

  console.log(convertKujiraEvents(response));
});
