import { ALPHABET, NUMBERS, SYMBOLS } from '../core/constants'

export interface PasswordOptions {
  len?: number
  pin?: boolean
  numericChars?: boolean
  symbolsChars?: boolean
}

/**
 * Generate a random password.
 *
 * @example
 *
 * randomPassword()
 *
 * @example
 *
 * randomPassword({ len: 10 }) // default is 15
 *
 * @example
 *
 * randomPassword({ pin: true }) // default is false
 *
 *
 * @example
 *
 * randomPassword({ numericChars: true }) // default is false
 *
 *
 * @example
 *
 * randomPassword({ symbolsChars: true }) // default is false
 *
 */

export function randomPassword<Options extends PasswordOptions> (
  options?: Options
): string {
  let chars: string = ''
  let result: string = ''
  const len = options?.len ?? 15

  if (options?.pin) {
    chars += NUMBERS

    for (let i = len; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }

    return result
  }

  if (!options?.numericChars && !options?.symbolsChars) {
    chars += `${ALPHABET}`
  }
  if (options?.numericChars) {
    chars += `${ALPHABET}${NUMBERS}`
  }
  if (options?.symbolsChars) {
    chars += `${ALPHABET}${SYMBOLS}`
  }

  for (let i = len; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}
