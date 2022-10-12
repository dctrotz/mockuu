import { randomFirstName } from '../firstName'
import { randomLastName } from '../lastName'
import { randomElement } from '../core'
import { FullNameOptions } from '../fullName'
import { Separators } from '../email'

export interface UsernameOptions extends FullNameOptions {
  numbers?: boolean
  separator?: Separators
}

/**
 * Generate a random username.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rUsername()
 *
 * @example
 *
 * rUsername({ length: 2 })
 *
 * @example
 *
 * rUsername({ firstname: 'Miguel' })
 *
 * @example
 *
 * rUsername({ lastName: 'Perez'})
 *
 * @example
 *
 * rUsername({ separator: '-' })
 *
 * @example
 *
 * rUsername({ numbers: true })
 *
 * @returns A string or an array of strings.
 */

export function randomUsername (options?: UsernameOptions) {
  const firstName = options?.firstname ?? randomFirstName()
  const lastName = options?.lastname ?? randomLastName()
  const separator =
    options?.separator ?? randomElement(['-', '_', '', '+', '.'])

  let username = `${firstName}${separator}${lastName}`

  if (options?.numbers) {
    username += randomElement([1, 2, 3, 4, 5, 6, 7, 8, 9])
  }

  return username
}
