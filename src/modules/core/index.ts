/**
 * It takes an array and returns a random element from that array
 * @param arr - The array to pick a random element from.
 * @returns A random element from the array.
 */

export interface Options {
  length?: number
}

export function faker<T> (data: Readonly<T[]>, options?: Options) {
  if (options?.length) {
    return Array.from({ length: options.length }, () => randomElement(data))
  }

  return randomElement(data)
}

export function randomElement<T> (arr: Readonly<T[]>) {
  return arr[Math.floor(Math.random() * arr.length)]
}
