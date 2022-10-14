import data from '../../locale/fist_name'
import { mockuu } from '../core'

export interface NameOptions {
  gender?: 'female' | 'male'
}

/**
 * Generate a random firstName
 *
 * @example
 *
 * randomFirstName()
 *
 * @example
 *
 * randomFirstName({ gender: 'female' })
 *
 */

export function randomFirstName<Options extends NameOptions> (
  options?: Options
): string {
  const gender = options?.gender ?? mockuu(['male', 'female'])
  const names = data[gender]

  return mockuu(names)
}
