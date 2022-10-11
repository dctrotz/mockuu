import { describe, it, expect } from 'vitest'
import { rPassword } from '../..'
import { NUMBERS, SYMBOLS } from '.'

describe('password', () => {
  it('should return a password without numeric and symbols characters', () => {
    const result = rPassword()

    expect(
      result.split('').some((char: string) => NUMBERS.includes(char))
    ).toBe(false)
    expect(
      result.split('').some((char: string) => SYMBOLS.includes(char))
    ).toBe(false)
    expect(result).toHaveLength(15)
  })
})
