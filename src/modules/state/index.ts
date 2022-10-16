import { mockuu } from '../core'
import data from 'src/locale/state'

export interface StateProps {
  abbr?: boolean
}

/**
 * Generate a random state.
 *
 * @example
 *
 * randomState()
 *
 * @example
 *
 * randomState({ abbr: true }) // default is false
 */

export function randomState<Options extends StateProps> (
  options?: Options
): string {
  const states = options?.abbr ? data.withAbbr : data.withoutAbbr

  return mockuu(states)
}
