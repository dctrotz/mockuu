import { NUMBERS } from './constants'

/**
 * It takes an array of data and returns a random element from that array
 * @param data - Readonly<T[]>
*/

export function mockuu<T> (data: Readonly<T[]>) {
  return data[Math.floor(Math.random() * data.length)]
}

export interface ReplaceCharsOptions {
  char: string
  format: string
}

/**
 * It takes a string and replaces all instances of a character with a random number
*/

export function replaceChars<Options extends ReplaceCharsOptions> (
  options: Options
): string {
  const format = options?.format
  const char = options?.char

  return format
    .split('')
    .map((item) => {
      if (item === char) return mockuu(NUMBERS.split(''))
      else return item
    })
    .join('')
}
