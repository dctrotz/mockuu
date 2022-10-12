import { mockuu } from '../core'
import data from 'src/locale/direction'

export interface DirectionOptions {
  useAbbr?: boolean
}

/**
 * Generate a random direction.
 *
 * @example
 *
 * randomDirection({ useAbbr: true }) // default is false
 *
 */

export function randomDirection<Options extends DirectionOptions> (
  options?: Options
): string {
  const directions = options?.useAbbr ? data.withAbbr : data.withoutAbbr

  return mockuu(directions)
}
