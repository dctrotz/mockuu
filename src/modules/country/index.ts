import { mockuu } from '../core'
import data from '../../locale/country'

export interface CountryOptions {
  code?: boolean
}

/**
 * Generate a random country
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rCountry({ length: 4 })
 *
 * @example
 *
 * rCountry({ code: true })
 *
 * @returns A string or an array of strings.
 */

export function randomCountry (options?: CountryOptions): string {
  const countries = options?.code ? data.code : data.name

  return mockuu(countries)
}
