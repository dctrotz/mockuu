export interface Options {
  length?: number
}

export type Function<T> = () => T

/**
 * It returns a random element from an array
 *
 * @param data - The array of data to choose from.
 * @param {Options} [options]
 * @returns An array of random elements or a single element from the array
 *
 */

export function faker<T> (data: Readonly<T[]> | Function<T>, options?: Options) {
  const generator = Array.isArray(data)
    ? () => randomElement(data)
    : data as Function<T>

  if (!options?.length) {
    return generator()
  }

  return Array.from({ length: options.length }, () => generator())
}

/**
 * Takes an array and returns a random element from that array
 *
 * @param arr - The array to pick a random element from.
 * @returns A random element from the array.
 *
 */

export function randomElement<T> (arr: Readonly<T[]>) {
  return arr[Math.floor(Math.random() * arr.length)]
}
