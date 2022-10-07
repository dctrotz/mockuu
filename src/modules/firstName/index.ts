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
 * rFirstName({ length: 2 }) // ['Kari','Dianna']
 *
 * @example
 *
 * rFirstName({ gender: 'female' }) // 'Nadine'
 *
 * @example
 *
 * rFirstName({ length: 2, gender: 'male' }) // ['Franklin', 'Jesus']
 */

export function rFirstName (options?: NameOptions) : string | string[] {
  const gender = options?.gender ?? randomElement(['male', 'female'])
  const names = data[gender]

  return faker(names, options)
}
