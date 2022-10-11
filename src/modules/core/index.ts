/**
 * It takes an array of data and returns a random element from that array
 * @param data - Readonly<T[]>
 * @returns A function that takes an array and returns a random element from that array.
*/

export function mockuu<T> (data: Readonly<T[]>) {
  return randomElement(data)
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
