import data from '../../locale/last_name'
import { mockuu } from '../core'

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

export function randomLastName () : string {
  return mockuu(data)
}
