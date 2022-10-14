import { RandomNumberOptions, randomNumber } from '../number'
export interface LongitudeOptions extends Omit<RandomNumberOptions, 'length'> {}

/**
 * Generate a random longitude.
 *
 * @example
 *
 * randomLongitude()
 *
 * @example
 *
 * randomLongitude({ max: 180 }) // default is 200
 *
 * @example
 *
 * randomLongitude({ min: -400 }) // default is -200
 *
 * @example
 *
 * randomLongitude({ precision: 10 }) // default is 4
 *
 */

export function randomLongitude<Options extends LongitudeOptions> (
  options?: Options
): string {
  const [min, max, precision] = [
    options?.min ?? -200,
    options?.max ?? 200,
    options?.precision ?? 4
  ]

  return randomNumber({ max, min, precision }).toString()
}
