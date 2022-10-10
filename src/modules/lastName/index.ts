import data from '../../locale/last_name'
import { mockuu, Options } from '../core'

/**
 * Generate a random last name.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rLastName()
 *
 * @example
 *
 * rLastName({ length: 2 })
 *
 * @returns A string or an array of strings.
 */

export function rLastName (options?: Options) {
  return mockuu(data, options)
}
