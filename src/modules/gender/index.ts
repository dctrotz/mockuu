import { mockuu } from '../core'
import data from '../../locale/gender'

/**
 * Generate a random gender.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rGender()
 *
 * @example
 *
 * rGender({ length: 2 })
 *
 * @returns A string or an array of strings.
 */

export function rGender () {
  return mockuu(data)
}
