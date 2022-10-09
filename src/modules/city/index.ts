import { Options, faker } from '../core'
import data from '../../locale/city'

/**
 * Generate a random city
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rCity({ length: 4 })
 *
 * @returns A string or an array of strings.
 */

export function rCity (options?: Options) {
  return faker(data, options)
}
