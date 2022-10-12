import { mockuu } from '../core'
import data from '../../locale/gender'

/**
 * Generate a random gender.
 *
 * @example
 *
 * randomGender()
 *
 */

export function randomGender () : string {
  return mockuu(data)
}
