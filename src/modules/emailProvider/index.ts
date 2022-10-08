import { faker, Options } from '../core'
import data from 'src/locale/email_provider'

/**
 * Generate a random email provider.
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rEmailProvider({ length: 4 })
 *
 * @returns A string or an array of strings.
 */

export function rEmailProvider (options?: Options): string | string[] {
  return faker(data, options)
}
