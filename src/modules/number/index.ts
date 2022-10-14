export interface RandomNumberOptions {
  max?: number
  min?: number
  precision?: number
  length?: number
}

/**
 * It returns a random number between two numbers, with a specified precision
 *
 * @example
 *
 * randomNumber()
 *
 * @example
 *
 * randomNumber({ max: 180 }) // default is 0
 *
 * @example
 *
 * randomNumber({ min: -400 }) // default is 10
 *
 * @example
 *
 * randomNumber({ precision: 10 }) // default is 0
 */

export function randomNumber<Options extends RandomNumberOptions> (
  options?: Options
): number | number[] {
  const [min, max, precision] = [
    options?.min ?? 0,
    options?.max ?? 10,
    options?.precision ?? 0
  ]

  if (min === max) return min

  if (options?.length) {
    return Array.from({ length: options.length }, () =>
      Number((Math.random() * (max - min) + min).toFixed(precision))
    )
  }

  return Number((Math.random() * (max - min) + min).toFixed(precision))
}
