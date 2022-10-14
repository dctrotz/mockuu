import { LongitudeOptions } from '../longitude'
import { randomNumber } from '../number'

export interface LatitudeOptions extends LongitudeOptions {}

/**
 * Generate a random latitude.
 *
 * @example
 *
 * randomLatitude()
 *
 * @example
 *
 * randomLatitude({ max: 180 }) // default is 100
 *
 * @example
 *
 * randomLatitude({ min: -200 }) // default is -100
 *
 * @example
 *
 * randomLatitude({ precision: 10 }) // default is 4
 *
 */

export function randomLatitude<Options extends LatitudeOptions> (
  options?: Options
): string {
  const [min, max, precision] = [
    options?.min ?? -100,
    options?.max ?? 100,
    options?.precision ?? 4
  ]

  return randomNumber({ max, min, precision }).toString()
}
