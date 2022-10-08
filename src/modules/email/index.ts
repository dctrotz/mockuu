import { faker, randomElement, Options } from '../core'
import { rFirstName } from '../firstName'
import { rLastName } from '../lastName'
import { rDomainSuffix } from '../domainSuffix'
import { rEmailProvider } from '../emailProvider'

export type Separators = '-' | '_' | '' | '+' | '.'

export interface EmailOptions extends Options {
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
 * @example
 *
 * rEmail({ length: 5 })
 *
 * @returns A string or an array of strings.
 */

export function rEmail (options?: EmailOptions) {
  const factory = () => {
    const firstName = options?.firstName ?? rFirstName()
    const lastName = options?.lastName ?? rLastName()
    const domainSuffix = options?.suffix ?? rDomainSuffix()
    const provider = options?.provider ?? rEmailProvider()
    const separator =
      options?.separator ?? randomElement(['-', '_', '', '+', '.'])

    return `${firstName}${separator}${lastName}@${provider}.${domainSuffix}`
  }

  return faker(factory, options)
}
