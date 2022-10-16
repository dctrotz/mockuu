import { mockuu } from '../core'
import data from 'src/locale/timezone'

/**
 * Generate a random timezone.
 *
 * @example
 *
 * randomTimeZone()
 */

export function randomTimeZone (): string {
  return mockuu(data)
}
