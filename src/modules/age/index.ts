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

export function rAge () {
  return Math.floor(Math.random() * 100)
}
