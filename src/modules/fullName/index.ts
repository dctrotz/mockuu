import { rFirstName } from '../firstName'
import { rLastName } from '../lastName'

export interface FullNameOptions {
  firstname?: string
  lastname?: string
}

/**
 * Generate a random full name.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rFullName()
 *
 * @example
 *
 * rFullName({ length: 2 })
 *
 * @example
 *
 * rFullName({ firstname: 'Mat' })
 *
 * @example
 *
 * rFullName({ lastname: 'duran' })
 *
 * @returns A string or an array of strings.
 */

export function rFullName (options?: FullNameOptions) {
  const firstname = options?.firstname ?? rFirstName()
  const lastName = options?.lastname ?? rLastName()

  return `${firstname} ${lastName}`
}
