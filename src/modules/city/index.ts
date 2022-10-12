import { mockuu } from '../core'
import data from '../../locale/city'

/**
 * Generate a random city
 *
 * @example
 *
 * randomCity()
 */

export function randomCity () : string {
  return mockuu(data)
}
