import { randomFirstName } from '../firstName'
import { randomLastName } from '../lastName'

export interface FullNameOptions {
  firstname?: string
  lastname?: string
}

/**
 * Generate a random full name.
 *
 * @example
 *
 * randomFullName()
 *
 * @example
 *
 * randomFullName({ firstname: 'Mat' })
 *
 * @example
 *
 * randomFullName({ lastname: 'duran' })
 *
 */

export function randomFullName<Options extends FullNameOptions> (
  options?: Options
): string {
  const firstname = options?.firstname ?? randomFirstName()
  const lastName = options?.lastname ?? randomLastName()

  return `${firstname} ${lastName}`
}
