import { randomNumber } from '../number'
import { randomStreetName } from '../streetName'

/**
 * Generate a random street address.
 *
 * @example
 *
 * randomStreetAddress()
 *
 */

export function randomStreetAddress (): string {
  return `${randomNumber({ min: 0, max: 1500 })} ${randomStreetName()}`
}
