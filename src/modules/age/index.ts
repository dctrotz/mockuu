import { mockuu, Options } from '../core'

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

export function rAge (options?: Options) {
  return mockuu(() => Math.floor(Math.random() * 100), options)
}
