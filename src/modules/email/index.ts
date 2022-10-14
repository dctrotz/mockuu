import { mockuu } from '../core'
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
 *
 * @example
 *
 * randomEmail({ firstname: 'Julian' })
 *
 * @example
 *
 * randomEmail({ lastName: 'Perez' })
 *
 * @example
 *
 * randomEmail({ domainSuffix: 'com' })
 *
 * @example
 *
 * randomEmail({ provider: 'yahoo'})
 *
 * @example
 *
 * randomEmail({ separator: '-' })
 *
 */

export function randomEmail<Options extends EmailOptions> (
  options?: Options
): string {
  const firstName = options?.firstName ?? randomFirstName()
  const lastName = options?.lastName ?? randomLastName()
  const domainSuffix = options?.suffix ?? randomDomainSuffix()
  const provider = options?.provider ?? randomEmailProvider()
  const separator =
    options?.separator ?? mockuu(['-', '_', '', '+', '.'])

  return `${firstName}${separator}${lastName}@${provider}.${domainSuffix}`
}
