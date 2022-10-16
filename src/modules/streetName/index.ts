import { mockuu } from '../core'
import data from 'src/locale/street'

/**
 * Generate a random street name.
 *
 * @example
 *
 * randomStreetName()
 *
 */

export function randomStreetName (): string {
  return mockuu(data)
}
