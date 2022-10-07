import data from '../../locale/firstName.json'
import { faker, randomElement } from '../core'

export interface FirstNameOptions {
  gender?: 'female' | 'male'
  length?: number
}

/**
 * Generate a random firstName
 *
 * @param {FirstNameOptions} [options] - FirstNameOptions
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

export function rFirstName (options?: FirstNameOptions) {
  const gender = options?.gender ?? randomElement(['male', 'female'])
  const names = data[gender]

  return faker(names, options)
}
