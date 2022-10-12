import { mockuu } from '../core'
import data from 'src/locale/direction'

export interface DirectionOptions {
  useAbbr?: boolean
}

/**
 * Generate a cardenal direction
 * @param {Options} [options] - Options
 *
 * @example
 *
 * rCardenalDirection({ useAbbr: true })
 *
 * @example
 *
 * rCardenalDirection({ length: 5 })
 *
 * @returns A string or an array of strings.
 */

export function randomDirection (options?: DirectionOptions) : string {
  const directions = options?.useAbbr
    ? data.withAbbr
    : data.withoutAbbr

  return mockuu(directions)
}
