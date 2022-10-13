export interface LongitudeOptions {
  max: number
  min: number
  precision: number
}

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
  const max = options?.max ?? 200
  const min = options?.min ?? -200
  const precision = options?.precision ?? 4

  return (Math.random() * (max - min) + min).toFixed(precision)
}
