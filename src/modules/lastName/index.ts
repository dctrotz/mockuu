import data from '../../locale/last_name'
import { mockuu } from '../core'

/**
 * Generate a random last name.
 *
 * @example
 *
 * randomLastName()
 *
 */

export function randomLastName () : string {
  return mockuu(data)
}
