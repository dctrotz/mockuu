import { PhoneOptions, NUMBERS } from '../phone'
import { mockuu } from '../core'

export interface ZipCodeOptions extends PhoneOptions {}
/**
 * Generate a random latitude.
 *
 * @example
 *
 * randomLatitude()
 *
 * @example
 *
 * randomLatitude({ max: 180 }) // default is 100
 *
 * @example
 *
 * randomLatitude({ min: -200 }) // default is -100
 *
 * @example
 *
 * randomLatitude({ precision: 10 }) // default is 4
 *
 */

export function randomZipCode<Options extends ZipCodeOptions> (
  options?: Options
): string {
  if (options?.format) {
    return options?.format
      .split('')
      .map((item) => {
        if (item === '#') return mockuu(NUMBERS)
        else return item
      })
      .join('')
  }

  let zipCode = '' + Math.floor(Math.random() * 9000 + 1000)

  if (mockuu([false, true])) {
    zipCode += '-' + Math.floor(Math.random() * 9000 + 1000)
  }

  return zipCode
}
