export interface Options {
  length?: number
}

export type Factory<T> = () => T

export function mockuu<T> (data: Readonly<T[]> | Factory<T>, options?: Options) {
  const generator = Array.isArray(data)
    ? () => randomElement(data)
    : (data as Factory<T>)

  if (!options?.length) {
    return generator()
  }

  return Array.from({ length: options.length }, () => generator())
}

/**
 * Takes an array and returns a random element from that array
 *
 * @param arr - The array to pick a random element from.
 *
 * @returns A random element from the array.
 *
 */

export function randomElement<T> (arr: Readonly<T[]>) {
  return arr[Math.floor(Math.random() * arr.length)]
}
