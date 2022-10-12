import { randomElement } from '../core'
import { randomFirstName } from '../firstName'
import { randomLastName } from '../lastName'
import { randomDomainSuffix } from '../domainSuffix'
import { randomEmailProvider } from '../emailProvider'

export type Separators = '-' | '_' | '' | '+' | '.'

export interface EmailOptions {
  firstName?: string
  lastName?: string
  provider?: string
  suffix?: string
  separator?: Separators
}

/**
 * Generates an email address
 * @param {EmailOptions} [options] - EmailOptions
 *
 * @example
 *
 * rEmail({ firstname: 'Julian' })
 *
 * @example
 *
 * rEmail({ lastName: 'Perez' })
 *
 * @example
 *
 * rEmail({ domainSuffix: 'com' })
 *
 * @example
 *
 * rEmail({ provider: 'yahoo'})
 *
 * @example
 *
 * rEmail({ separator: '-' })
 *
 * @returns A string or an array of strings.
 */

export function randomEmail (options?: EmailOptions): string {
  const firstName = options?.firstName ?? randomFirstName()
  const lastName = options?.lastName ?? randomLastName()
  const domainSuffix = options?.suffix ?? randomDomainSuffix()
  const provider = options?.provider ?? randomEmailProvider()
  const separator =
    options?.separator ?? randomElement(['-', '_', '', '+', '.'])

  return `${firstName}${separator}${lastName}@${provider}.${domainSuffix}`
}
