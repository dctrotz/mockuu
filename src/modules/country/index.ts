import { Options, faker } from '../core'
import data from '../../locale/country'

export interface CountryOptions extends Options {
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

export function rCountry (options?: CountryOptions) {
  const countries = options?.code
    ? data.code
    : data.name

  return faker(countries, options)
}
