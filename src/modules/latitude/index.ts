import { LongitudeOptions } from '../longitude'

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
  const max = options?.max ?? 100
  const min = options?.min ?? -100
  const precision = options?.precision ?? 4

  return (Math.random() * (max - min) + min).toFixed(precision)
}
