import data from '../../locale/last_name'
import { faker, Options } from '../core'

/**
 * Generate a random last name.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rLastName() // Chanthara
 *
 * @example
 *
 * rLastName({ length: 2 }) // ['Chanthara', 'Chauke']
 */

export function rLastName (options?: Options): string | string[] {
  return faker(data, options)
}
