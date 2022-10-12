import { describe, it, expect } from 'vitest'
import { randomPassword } from '../..'
import { NUMBERS, SYMBOLS, ALPHABET } from '.'

describe('password', () => {
  it('should return a password without numeric and symbols characters', () => {
    const result = randomPassword()

    expect(
      result.split('').every((char: string) => ALPHABET.includes(char))
    ).toBe(true)

    expect(result).toHaveLength(15)
  })

  it('should return a PIN password', () => {
    const result = randomPassword({ pin: true })

    expect(
      result.split('').every((char: string) => NUMBERS.includes(char))
    ).toBe(true)
  })

  it('should return a password length of 6', () => {
    const result = randomPassword({ len: 6 })

    expect(result).toHaveLength(6)
  })

  it('should return a password with at least 1 Symbol', () => {
    const result = randomPassword({ symbolsChars: true })

    expect(
      result.split('').some((char: string) => SYMBOLS.includes(char))
    ).toBe(true)
  })

  it('should return a password with at least 1 number', () => {
    const result = randomPassword({ numericChars: true })

    expect(
      result.split('').some((char: string) => NUMBERS.includes(char))
    ).toBe(true)
  })
})
