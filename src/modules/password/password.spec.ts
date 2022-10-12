import { describe, it, expect } from 'vitest'
import { randomPassword } from '../..'
import { NUMBERS, SYMBOLS } from '.'

describe('password', () => {
  it('should return a password without numeric and symbols characters', () => {
    const result = randomPassword()

    expect(
      result.split('').some((char: string) => NUMBERS.includes(char))
    ).toBe(false)
    expect(
      result.split('').some((char: string) => SYMBOLS.includes(char))
    ).toBe(false)
    expect(result).toHaveLength(15)
  })
})
