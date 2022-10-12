import { mockuu } from '../core'
import data from '../../locale/country'

export interface CountryOptions {
  code?: boolean
}

/**
 * Generate a random country
 *
 * @example
 *
 * randomCountry()
 *
 * @example
 *
 * randomCountry({ code: true }) // default is false
 *
 */

export function randomCountry<Options extends CountryOptions> (
  options?: Options
): string {
  const countries = options?.code ? data.code : data.name

  return mockuu(countries)
}
