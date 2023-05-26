import 'jest-extended';
import { parse as flattedParse, stringify as flattedStringify } from 'flatted';
import { promisify } from 'util';
import fs from 'fs';

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

      // Function types
      function hello() {
        return 'Hello, world!';
      }, // Common function
      function () {
        return 'Hello, world!';
      }, // Anonymous function
      () => 'Hello, world!', // Arrow function

      // Object types
      { prop: 'Hello' }, // Simple object
      new MyClass(), // Instance of a class
      myObject, // Object with cyclic reference
    ];

    for (const target of targets) {
      try {
        console.log('target:\n', target);

        const serialized = Serializer.serialize(target);
        console.log('serialized:\n', serialized);

        const deserialized = Serializer.deserialize(serialized);
        console.log('deserialized:\n', deserialized);
      } catch (error) {
        console.log('error:\n', error);
      }
    }
  });
});

export namespace Serializer {
  enum Category {
    PRIMITIVE = 'primitive',
    FUNCTION = 'function',
    ARRAY = 'array',
    OBJECT = 'object',
  }

  enum PrimitiveType {
    ANY = 'any',
    BIGINT = 'bigint',
    BOOLEAN = 'boolean',
    NULL = 'null',
    NUMBER = 'number',
    STRING = 'string',
    SYMBOL = 'symbol',
    UNDEFINED = 'undefined',
    UNKNOWN = 'unknown',
    VOID = 'void',
  }

  interface SerializedObject {
    name: string;
    type: any;
    category: Category;
    value: any;
    class: string;
  }

  export function createInstance<T>(className: string, ...args: any[]): T {
    const constructor = eval(className);

    return new constructor(...args) as T;
  }

  export function isPrimitive(type: string): boolean {
    return Object.values(PrimitiveType).includes(type as PrimitiveType);
  }

  export function getClass(target: any): string {
    return target.constructor.name;
  }

  export function getCategory(target: any): Category {
    const type = typeof target;

    if (isPrimitive(type)) {
      return Category.PRIMITIVE;
    }

    for (const category of Object.values(Category)) {
      if (type === category) {
        return category;
      }
    }

    throw new Error(`Unknown type: ${type}`);
  }

  export function getPrimitiveType(target: any): PrimitiveType {
    const type = typeof target;

    for (const primitiveType of Object.values(PrimitiveType)) {
      if (type === primitiveType) {
        return primitiveType;
      }
    }

    throw new Error(`Unknown primitive type: ${target}`);
  }

  export function parse(
    input: any,
    name: string = 'root',
    seen: Set<string> = new Set()
  ): SerializedObject {
    const type = typeof input;

    const category = getCategory(input);

    if (category === Category.PRIMITIVE) {
      return {
        name: name,
        type: type,
        category: category,
        value: input,
      } as SerializedObject;
    }

    if (category === Category.FUNCTION) {
      return {
        name: name,
        type: type,
        category: category,
        value: input,
      } as SerializedObject;
    }

    if (category === Category.ARRAY) {
      const parsed: any = [];

      for (const [index, element] of input.entries()) {
        parsed[index] = parse(element, index.toString(), seen);
      }

      return {
        name: name,
        type: type,
        category: category,
        value: parsed,
      } as SerializedObject;
    }

    if (seen.has(input)) {
      throw new Error('Cyclic object value');
    }

    seen.add(input);

    const parsed: any = {};

    for (const [key, value] of Object.entries(input)) {
      parsed[key] = parse(value, key, seen);
    }

    return {
      name: name,
      type: type,
      category: category,
      value: parsed,
      class: input.constructor.name,
    } as SerializedObject;
  }

  export function revive<T>(input: SerializedObject): T {
    if (input.category === Category.PRIMITIVE) {
      return input.value as T;
    }

    if (input.category === Category.FUNCTION) {
      return new Function(`return ${input.value}`)() as T;
    }

    if (input.category === Category.ARRAY) {
      return input.value.map((element: SerializedObject) =>
        revive(element)
      ) as T;
    }

    if (input.category === Category.OBJECT) {
      const object: any = createInstance<T>(input.class);

      for (const [key, value] of Object.entries<SerializedObject>(
        input.value
      )) {
        object[key] = revive(value) as T;
      }

      return object as T;
    }

    throw new Error(`Unknown category: ${input.category}`);
  }

  export function serialize(target: any): string {
    return flattedStringify(parse(target));
  }

  export function deserialize<T>(target: string): T {
    return revive(flattedParse(target)) as T;
  }

  export async function serializeToFile(target: any, path: string) {
    const serializedString = serialize(target);

    return await promisify(fs.writeFile)(path, serializedString);
  }

  export async function deserializeFromFile<T>(path: string) {
    const deserializedString = await promisify(fs.readFile)(path, 'utf8');

    return deserialize(deserializedString) as T;
  }
}
