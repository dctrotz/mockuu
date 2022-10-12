import data from '../../locale/fist_name'
import { mockuu, randomElement } from '../core'

export interface NameOptions {
  gender?: 'female' | 'male'
  length?: number
}

/**
 * Generate a random firstName
 *
 * @param {NameOptions} [options] - FirstNameOptions
 *
 * @example
 *
 * rFirstName()
 *
 * @example
 *
 * rFirstName({ length: 2 })
 *
 * @example
 *
 * rFirstName({ gender: 'female' })
 *
 * @returns A string or an array of strings.
 */

export function randomFirstName (options?: NameOptions): string {
  const gender = options?.gender ?? randomElement(['male', 'female'])
  const names = data[gender]

  return mockuu(names)
}
