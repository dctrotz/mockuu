import { mockuu, Options } from '../core'
import data from '../../locale/email_provider'

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

export function rEmailProvider (options?: Options) {
  return mockuu(data, options)
}
