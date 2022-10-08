import data from '../../locale/fist_name'
import { faker, randomElement } from '../core'

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

export function rFirstName (options?: NameOptions) : string | string[] {
  const gender = options?.gender ?? randomElement(['male', 'female'])
  const names = data[gender]

  return faker(names, options)
}
