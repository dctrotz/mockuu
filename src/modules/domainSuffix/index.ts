import { mockuu } from '../core'
import data from '../../locale/domain_suffix'

/**
 * Generate a random domain suffix
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rDomainSuffix({ length: 4 })
 *
 * @returns A string or an array of strings.
 */

export function rDomainSuffix () {
  return mockuu(data)
}
