import { randomNumber } from '../number'
import { randomStreetName } from '../streetName'

/**
 * Generate a random street adress.
 *
 * @example
 *
 * randomStreetAdress()
 *
 */

export function randomStreetAdress (): string {
  return `${randomNumber({ min: 0, max: 1500 })} ${randomStreetName()}`
}
