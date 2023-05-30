import fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import { KujiraConfig } from './kujira.config';
import { Kujira } from './kujira';
import { parse as flattedParse, stringify as flattedStringify } from 'flatted';
import { promisify } from 'util';

/**
 *
 * @param value
 * @param errorMessage
 */
export const getNotNullOrThrowError = <R>(
  value?: any,
  errorMessage: string = 'Value is null or undefined'
): R => {
  if (value === undefined || value === null) throw new Error(errorMessage);

  return value as R;
};

/**
 *
 * @param value
 * @param defaultValue
 */
export const getOrDefault = <R>(value: any, defaultValue: R): R => {
  if (value === undefined || value === null) return defaultValue;

  return value as R;
};

/**
 *
 * @param milliseconds
 */
export const sleep = (milliseconds: number) =>
  new Promise((callback) => setTimeout(callback, milliseconds));

/**
 * Same as Promise.all(items.map(item => task(item))), but it waits for
 * the first {batchSize} promises to finish before starting the next batch.
 *
 * @template A
 * @template B
 * @param {function(A): B} task The task to run for each item.
 * @param {A[]} items Arguments to pass to the task for each call.
 * @param {int} batchSize The number of items to process at a time.
 * @param {int} delayBetweenBatches Delay between each batch (milliseconds).
 * @returns {B[]}
 */
export const promiseAllInBatches = async <I, O>(
  task: (item: I) => Promise<O>,
  items: any[],
  batchSize: number = KujiraConfig.config.parallel.all.batchSize,
  delayBetweenBatches: number = KujiraConfig.config.parallel.all
    .delayBetweenBatches
): Promise<O[]> => {
  let position = 0;
  let results: any[] = [];

  if (!batchSize) {
    batchSize = items.length;
  }

  while (position < items.length) {
    const itemsForBatch = items.slice(position, position + batchSize);
    results = [
      ...results,
      ...(await Promise.all(itemsForBatch.map((item) => task(item)))),
    ];
    position += batchSize;

    if (position < items.length) {
      if (delayBetweenBatches > 0) {
        await sleep(delayBetweenBatches);
      }
    }
  }

  return results;
};

/**
 * @param targetObject
 * @param targetFunction
 * @param targetParameters
 * @param maxNumberOfRetries 0 means no retries
 * @param delayBetweenRetries 0 means no delay (milliseconds)
 * @param timeout 0 means no timeout (milliseconds)
 * @param timeoutMessage
 */
export const runWithRetryAndTimeout = async <R>(
  targetObject: any,
  targetFunction: (...args: any[]) => R,
  targetParameters: any,
  maxNumberOfRetries: number = KujiraConfig.config.retry.all.maxNumberOfRetries,
  delayBetweenRetries: number = KujiraConfig.config.retry.all
    .delayBetweenRetries,
  timeout: number = KujiraConfig.config.timeout.all,
  timeoutMessage: string = 'Timeout exceeded.'
): Promise<R> => {
  const errors = [];
  let retryCount = 0;
  let timer: any;

  if (timeout > 0) {
    timer = setTimeout(() => new Error(timeoutMessage), timeout);
  }

  do {
    try {
      const result = await targetFunction.apply(targetObject, targetParameters);

      if (timeout > 0) {
        clearTimeout(timer);
      }

      return result as R;
    } catch (error: any) {
      errors.push(error);

      retryCount++;

      console.debug(
        `${targetObject?.constructor.name || targetObject}:${
          targetFunction.name
        } => retry ${retryCount} of ${maxNumberOfRetries}`
      );

      if (retryCount < maxNumberOfRetries) {
        if (delayBetweenRetries > 0) {
          await sleep(delayBetweenRetries);
        }
      } else {
        const allErrors = Error(
          `Failed to execute "${
            targetFunction.name
          }" with ${maxNumberOfRetries} retries. All error messages were:\n${errors
            .map((error: any) => error.message)
            .join(';\n')}\n`
        );

        allErrors.stack = error.stack;

        throw allErrors;
      }
    }
  } while (retryCount < maxNumberOfRetries);

  throw Error('Unknown error.');
};

export function* splitInChunks<T>(
  target: T[],
  quantity: number
): Generator<T[], void> {
  for (let i = 0; i < target.length; i += quantity) {
    yield target.slice(i, i + quantity);
  }
}

export const verifyKujiraIsAvailable = async (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  await Kujira.getInstance(request.body.chain, request.body.network);

  return next();
};

export const isValidKujiraPublicKey = (publicKey: string): boolean => {
  return /^kujira([a-z0-9]){39}$/.test(publicKey);
};

export const isKujiraPrivateKey = (privateKey: string): boolean => {
  return /^(?:\b[a-z]+\b(?:\s|$)){12}(?:(?:\b[a-z]+\b(?:\s|$)){12})?$/.test(
    privateKey
  );
};

export namespace Serializer {
  // enum Category {
  //   PRIMITIVE = 'primitive',
  //   FUNCTION = 'function',
  //   ARRAY = 'array',
  //   OBJECT = 'object',
  // }

  // enum PrimitiveType {
  //   ANY = 'any',
  //   BIGINT = 'bigint',
  //   BOOLEAN = 'boolean',
  //   NULL = 'null',
  //   NUMBER = 'number',
  //   STRING = 'string',
  //   SYMBOL = 'symbol',
  //   UNDEFINED = 'undefined',
  //   UNKNOWN = 'unknown',
  //   VOID = 'void',
  // }

  // interface SerializedObject {
  //   name: string;
  //   type: any;
  //   category: Category;
  //   value: any;
  //   class: string;
  // }

  // export function createInstance<T>(className: string, ...args: any[]): T {
  //   const constructor = eval(className);
  //
  //   return new constructor(...args) as T;
  // }

  // export function isPrimitive(type: string): boolean {
  //   return Object.values(PrimitiveType).includes(type as PrimitiveType);
  // }

  // export function getClass(target: any): string {
  //   return target.constructor.name;
  // }

  // export function getCategory(target: any): Category {
  //   const type = typeof target;
  //
  //   if (isPrimitive(type)) {
  //     return Category.PRIMITIVE;
  //   }
  //
  //   for (const category of Object.values(Category)) {
  //     if (type === category) {
  //       return category;
  //     }
  //   }
  //
  //   throw new Error(`Unknown type: ${type}`);
  // }

  // export function getPrimitiveType(target: any): PrimitiveType {
  //   const type = typeof target;
  //
  //   for (const primitiveType of Object.values(PrimitiveType)) {
  //     if (type === primitiveType) {
  //       return primitiveType;
  //     }
  //   }
  //
  //   throw new Error(`Unknown primitive type: ${target}`);
  // }

  // export function parse(
  //   input: any,
  //   name: string = 'root',
  //   seen: Set<string> = new Set()
  // ): SerializedObject {
  //   const type = typeof input;
  //
  //   const category = getCategory(input);
  //
  //   if (category === Category.PRIMITIVE) {
  //     return {
  //       name,
  //       type,
  //       category,
  //       value: input,
  //     } as SerializedObject;
  //   }
  //
  //   if (category === Category.FUNCTION) {
  //     return {
  //       name,
  //       type,
  //       category,
  //       value: input.toString(),
  //     } as SerializedObject;
  //   }
  //
  //   if (category === Category.ARRAY) {
  //     const parsed: any = [];
  //
  //     for (const [index, element] of input.entries()) {
  //       parsed[index] = parse(element, index.toString(), seen);
  //     }
  //
  //     return {
  //       name,
  //       type,
  //       category,
  //       value: parsed,
  //     } as SerializedObject;
  //   }
  //
  //   if (seen.has(input)) {
  //     throw new Error('Cyclic object value');
  //   }
  //
  //   seen.add(input);
  //
  //   let parsed: any = {};
  //
  //   if (input === null || input === undefined) {
  //     parsed = input;
  //   } else {
  //     for (const [key, value] of Object.entries(input)) {
  //       parsed[key] = parse(value, key, seen);
  //     }
  //   }
  //
  //   return {
  //     name,
  //     type,
  //     category,
  //     value: parsed,
  //     class: input.constructor.name,
  //   } as SerializedObject;
  // }

  // export function revive<T>(input: SerializedObject): T {
  //   if (input.category === Category.PRIMITIVE) {
  //     return input.value as T;
  //   }
  //
  //   if (input.category === Category.FUNCTION) {
  //     return new Function(`return ${input.value}`)() as T;
  //   }
  //
  //   if (input.category === Category.ARRAY) {
  //     return input.value.map((element: SerializedObject) =>
  //       revive(element)
  //     ) as T;
  //   }
  //
  //   if (input.category === Category.OBJECT) {
  //     const object: any = createInstance<T>(input.class);
  //
  //     for (const [key, value] of Object.entries<SerializedObject>(
  //       input.value
  //     )) {
  //       object[key] = revive(value) as T;
  //     }
  //
  //     return object as T;
  //   }
  //
  //   throw new Error(`Unknown category: ${input.category}`);
  // }

  export function serialize(target: any): string {
    // return flattedStringify(parse(target));
    return flattedStringify(target);
  }

  export function deserialize<T>(target: string): T {
    // return revive(flattedParse(target)) as T;
    return flattedParse(target) as T;
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
