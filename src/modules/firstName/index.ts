import data from '../../locale/firstName.json'
import { faker, randomElement } from '../core'

interface FirstNameOptions {
  gender?: 'female' | 'male'
  length?: number
}

/**
 * It returns a random first name from a list of names
 * @param {FirstNameOptions} [options] - FirstNameOptions
 * @returns A random first name
 */

export function rFirstName (options?: FirstNameOptions) {
  const gender = options?.gender ?? randomElement(['male', 'female'])
  const names = data[gender]

  return faker(names, options)
}
