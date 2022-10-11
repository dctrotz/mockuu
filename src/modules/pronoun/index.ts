import { Options, mockuu } from '../core'
import data from 'src/locale/pronoun'

/**
 * Generate a random pronoun
 *
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rPronoun()
 *
 * @example
 *
 * rPronoun({ length: 5 })
 *
 * @returns A string or an array of strings.
 */

export function rPronoun (options?: Options) {
  return mockuu(data, options)
}