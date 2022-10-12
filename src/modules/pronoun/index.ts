import { mockuu } from '../core'
import data from 'src/locale/pronoun'

/**
 * Generate a random pronoun.
 *
 * @example
 *
 * randomPronoun()
 */

export function randomPronoun () : string {
  return mockuu(data)
}
