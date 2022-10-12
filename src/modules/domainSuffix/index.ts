import { mockuu } from '../core'
import data from '../../locale/domain_suffix'

/**
 * Generate a random domain suffix
 *
 * @example
 *
 * randomDomainSuffix()
 *
 */

export function randomDomainSuffix () : string {
  return mockuu(data)
}
