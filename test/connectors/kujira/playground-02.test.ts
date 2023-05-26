import 'jest-extended';
import { Serializer } from '../../../src/connectors/kujira/kujira.helpers';

jest.setTimeout(30 * 60 * 1000);

describe('Playground', () => {
  it('Playground 01', async () => {
    class MyClass {
      prop: string = 'Hello, world!';
    }

    const myObject = {
      prop1: 'Hello',
      prop2: 42,
      prop3: undefined,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    myObject.prop3 = myObject; // Create a cyclic reference

    const targets = [
      // Primitive types
      123, // number
      'Hello, world!', // string
      true, // boolean
      Symbol('symbol'), // symbol
      null, // null
      undefined, // undefined
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      100n, // bigint

      // Object types
      { prop: 'Hello' }, // Simple object
      new MyClass(), // Instance of a class
      myObject, // Object with cyclic reference

      // Function types
      function hello() {
        return 'Hello, world!';
      }, // Common function
      function () {
        return 'Hello, world!';
      }, // Anonymous function
      () => 'Hello, world!', // Arrow function
    ];

    for (const target of targets) {
      try {
        console.log(target);

        const result = Serializer.serialize(target);

        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }
  });
});
