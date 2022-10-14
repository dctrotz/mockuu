import { mockuu } from '../core'

/**
 * Generate a random boolean.
 *
 * @example
 *
 * randomBoolean()
 *
 */

export function randomBoolean (): boolean {
  return mockuu([true, false])
}
