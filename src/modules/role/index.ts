import { mockuu } from '../core'
import data from 'src/locale/role'

/**
 * Generate a random role.
 *
 * @example
 *
 * randomRole()
 */

export function randomRole () : string {
  return mockuu(data)
}
