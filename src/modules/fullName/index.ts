import { randomFirstName } from '../firstName'
import { randomLastName } from '../lastName'

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

export function randomFullName (options?: FullNameOptions) : string {
  const firstname = options?.firstname ?? randomFirstName()
  const lastName = options?.lastname ?? randomLastName()

  return `${firstname} ${lastName}`
}
