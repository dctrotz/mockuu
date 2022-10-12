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
 * @example
 *
 * randomUsername()
 *
 * @example
 *
 * randomUsername({ firstname: 'Miguel' })
 *
 * @example
 *
 * randomUsername({ lastName: 'Perez'})
 *
 * @example
 *
 * randomUsername({ separator: '-' })
 *
 * @example
 *
 * randomUsername({ numbers: true }) // default is false
 *
 */

export function randomUsername<Options extends UsernameOptions> (options?: Options) : string {
  const firstName = options?.firstname ?? randomFirstName()
  const lastName = options?.lastname ?? randomLastName()
  const separator =
    options?.separator ?? randomElement(['-', '_', '', '+', '.'])

  let username = `${firstName}${separator}${lastName}`

  if (options?.numbers) {
    username += Math.floor(Math.random() * 1000)
  }

  return username
}
