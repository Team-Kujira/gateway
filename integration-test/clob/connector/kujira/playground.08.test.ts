import 'jest-extended';
import { convertKujiraEventsToMapOfEvents } from '../../../../src/connectors/kujira/kujira.convertors';

jest.setTimeout(30 * 60 * 1000);

it('Kujira Playground', async () => {
  const response = await require('./responses/create-several-orders.json');

  console.log(
    JSON.stringify(convertKujiraEventsToMapOfEvents(response.events), null, 2)
  );
});
