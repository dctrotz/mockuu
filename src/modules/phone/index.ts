import { replaceChars } from '../core'

export interface PhoneOptions {
  format?: string
}

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

  return replaceChars({ char: '#', format })
}
