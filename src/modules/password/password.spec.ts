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

  it('should return an array length of 5', () => {
    const result = rPassword({ length: 5 })

    expect(result).toHaveLength(5)
  })
})
