import 'jest-extended';
import { parse as flattedParse, stringify as flattedStringify } from 'flatted';
import { promisify } from 'util';
import fs from 'fs';
import { Map as ImmutableMap } from 'immutable';

jest.setTimeout(30 * 60 * 1000);

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
    value?: any;
    category: Category;
    primitiveType?: PrimitiveType;
    class?: string;
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

    if (target === null || target === undefined) {
      return Category.PRIMITIVE;
    }

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

    if (target === null) {
      return PrimitiveType.NULL;
    }

    if (target === undefined) {
      return PrimitiveType.UNDEFINED;
    }

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
    seen: Map<any, any> = new Map<any, any>()
  ): SerializedObject {
    const type = typeof input;

    const category = getCategory(input);

    if (category === Category.PRIMITIVE) {
      return {
        name: name,
        type: type,
        value: input,
        category: category,
        primitiveType: getPrimitiveType(input),
        class: undefined,
      } as SerializedObject;
    }

    if (category === Category.FUNCTION) {
      return {
        name: name,
        type: type,
        value: input.toString(),
        category: category,
        primitiveType: undefined,
        class: undefined,
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
        value: parsed,
        category: category,
        primitiveType: undefined,
        class: undefined,
      } as SerializedObject;
    }

    if (seen.has(input)) {
      return seen.get(input);
    }

    const parsed: any = {};

    for (const [key, value] of Object.entries(input)) {
      if (value === input) {
        parsed[key] = parsed;
        continue;
      }

      parsed[key] = parse(value, key, seen);
    }

    const output = {
      name: name,
      type: type,
      value: parsed,
      category: category,
      primitiveType: undefined,
      class: input.constructor.name,
    } as SerializedObject;

    seen.set(input, output);

    return output;
  }

  export function revive<T>(
    input: SerializedObject,
    seen: Map<any, any> = new Map<any, any>()
  ): T {
    if (input.category === Category.PRIMITIVE) {
      if (input.primitiveType === PrimitiveType.SYMBOL) {
        return Symbol(input.value) as T;
      }

      if (input.primitiveType === PrimitiveType.BIGINT) {
        return BigInt(input.value) as T;
      }

      if (input.primitiveType === PrimitiveType.UNDEFINED) {
        return undefined as T;
      }

      if (input.primitiveType === PrimitiveType.NULL) {
        return null as T;
      }

      if (input.primitiveType === PrimitiveType.VOID) {
        return undefined as void as T;
      }

      if (input.primitiveType === PrimitiveType.UNKNOWN) {
        return undefined as unknown as T;
      }

      if (input.primitiveType === PrimitiveType.ANY) {
        return undefined as any;
      }

      if (input.primitiveType === PrimitiveType.NUMBER) {
        return Number(input.value) as T;
      }

      if (input.primitiveType === PrimitiveType.STRING) {
        return String(input.value) as T;
      }

      if (input.primitiveType === PrimitiveType.BOOLEAN) {
        return Boolean(input.value) as T;
      }

      throw new Error(`Unknown primitive type: ${input.type}`);
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
      if (seen.has(input.value)) {
        return seen.get(input);
      }

      const object: any = createInstance<T>(String(input.class));

      for (const [key, value] of Object.entries<SerializedObject>(
        input.value
      )) {
        if (value === input.value) {
          object[key] = object;
          continue;
        }

        try {
          object[key] = revive(value) as T;
        } catch (exception) {
          if (
            exception instanceof TypeError &&
            exception.message.includes('which has only a getter')
          ) {
            console.warn(exception.message);
          }
        }
      }

      seen.set(input.value, object);

      return object as T;
    }

    return input as T;
  }

  export function inflate(target: any): any {
    return flattedParse(target);
  }

  export function deflate(target: any): any {
    return flattedStringify(target);
  }

  export function serialize(target: any): string {
    return deflate(parse(target));
  }

  export function deserialize<T>(target: string): T {
    return revive(inflate(target)) as T;
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class MyClass {
  prop: string = 'Hello, world!';
}

describe('Playground', () => {
  it('Playground 01', async () => {
    const myObject = {
      prop1: 'Hello',
      prop2: 42,
      prop3: undefined,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    myObject.prop3 = myObject; // Create a cyclic reference

    const planify = (target: any) => {
      try {
        return JSON.stringify(target);
      } catch (exception) {
        return Serializer.deflate(target);
      }
    };

    const targets = [
      // // Primitive types

      // 123, // number

      // 'Hello, world!', // string

      // true, // boolean

      // Symbol('symbol'), // symbol

      // null, // null

      // undefined, // undefined

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // 100n, // bigint

      // // Function types
      // function hello() {
      //   return 'Hello, world!';
      // }, // Common function

      // function () {
      //   return 'Hello, world!';
      // }, // Anonymous function

      // () => 'Hello, world!', // Arrow function

      // // Object types
      // { prop: 'Hello' }, // Simple object

      // new MyClass(), // Instance of a class

      // myObject, // Object with cyclic reference

      ImmutableMap(myObject), // ImmutableJS object
    ];

    let serialized: any = undefined;
    let deserialized: any = undefined;
    let error: any = undefined;

    for (const target of targets) {
      serialized = undefined;
      deserialized = undefined;
      error = undefined;

      try {
        console.log('target:\n', target);

        serialized = Serializer.serialize(target);
        deserialized = Serializer.deserialize(serialized);
      } catch (exception) {
        error = exception;
      } finally {
        console.log(`
target:
${planify(target)}

serialized:
${serialized}

deserialized:
${planify(deserialized)}

error:
${error && error.stack}
      `);

        console.log('');
      }
    }
  });
});
