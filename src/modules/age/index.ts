export interface AgeOptions {
  min?: number
  max?: number
}

/**
 * Generate a random age
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rAge()
 *
 * @example
 *
 * rAge({ length: 4 })
 *
 * @returns A string or an array of strings.
 */

export function randomAge (options?: AgeOptions) : number {
  const min: number = options?.min ?? 0
  const max: number = options?.max ?? 100

  return Math.floor(Math.random() * (max - min) + min)
}
