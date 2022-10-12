export interface AgeOptions {
  min?: number
  max?: number
}

/**
 * Generate a random age
 *
 * @example
 *
 * randomAge()
 *
 * @example
 *
 * randomAge({ min: 4 }) // default is 0
 *
 * @example
 *
 * randomAge({ max: 40 }) // default is 100
 *
 */

export function randomAge<Options extends AgeOptions> (
  options?: Options
): number {
  const min: number = options?.min ?? 0
  const max: number = options?.max ?? 100

  return Math.floor(Math.random() * (max - min) + min)
}
