import { mockuu } from '../core'
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

export function rCity () {
  return mockuu(data)
}
