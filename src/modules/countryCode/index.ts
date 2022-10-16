import { mockuu } from '../core'
import data from 'src/locale/country_code'

/**
 * Generate a random country code.
 *
 * @example
 *
 * randomCountryCode()
 */

export function randomCountryCode (): string {
  return mockuu(data)
}
