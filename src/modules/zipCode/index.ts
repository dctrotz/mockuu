import { PhoneOptions } from '../phone'
import { replaceChars } from '../core'
import { randomNumber } from '../number'
import { randomBoolean } from '../boolean'

export interface ZipCodeOptions extends PhoneOptions {}
/**
 * Generate a random zip code.
 *
 * @example
 *
 * randomZipCode()
 *
 * @example
 *
 * randomZipCode({ format: '####-####' })
 *
 */

export function randomZipCode<Options extends ZipCodeOptions> (
  options?: Options
): string {
  if (options?.format) {
    return replaceChars({ char: '#', format: options.format })
  }

  let zipCode = '' + randomNumber({ min: 1000, max: 9000 })

  if (randomBoolean()) {
    zipCode += '-' + randomNumber({ min: 1000, max: 9000 })
  }

  return zipCode
}
