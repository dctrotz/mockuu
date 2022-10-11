export interface PasswordOptions {
  size?: number
  numericChars?: boolean
  symbolsChars?: boolean
}

export const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
export const NUMBERS = '0123456789'
export const SYMBOLS = '!@#$^&*()_+=/?.,<>'

export function rPassword (options?: PasswordOptions) {
  let chars: string = ''
  const size = options?.size ?? 15

  if (!options?.numericChars && !options?.symbolsChars) {
    chars += `${ALPHABET}${ALPHABET.toUpperCase()}`
  }
  if (options?.numericChars) {
    chars += `${ALPHABET}${NUMBERS}${ALPHABET.toUpperCase()}`
  }
  if (options?.symbolsChars) {
    chars += `${ALPHABET}${SYMBOLS}${ALPHABET.toUpperCase()}`
  }

  let result: string = ''

  for (let i = size; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }

  return result
}
