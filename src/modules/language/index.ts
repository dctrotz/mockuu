import { mockuu } from '../core'
import data from 'src/locale/language'

/**
 * Generate a random language.
 *
 * @example
 *
 * randomLanguage()
 *
 */

export function randomLanguage (): string {
  return mockuu(data)
}
