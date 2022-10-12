import { mockuu } from '../core'

export interface PhoneOptions {
  format?: string
}

export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

/**
 * Generate a random phone number.
 *
 * @example
 *
 * randomPhone()
 *
 * @example
 *
 * randomPhone({ format: '+62 ## ### ## ##' })
 *
 */

export function randomPhone<Options extends PhoneOptions> (
  options?: Options
): string {
  const format = options?.format ?? '+45 ## ### ## ##'

  return format
    .split('')
    .map((item) => {
      if (item === '#') return mockuu(NUMBERS)
      else return item
    })
    .join('')
}
