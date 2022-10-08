import { describe, it, expect } from 'vitest'
import { rUsername, rLastName } from '../src'

describe('username', () => {
  const numbersRegex: RegExp = /[1-9]/

  it('should return an array length of 5', () => {
    const result = rUsername({ length: 5 })

    expect(result).toHaveLength(5)
  })

  it('should not contain numbers', () => {
    const result = rUsername()

    expect(result).not.match(numbersRegex)
  })

  it('should contain the lastName', () => {
    const lastname : string = rLastName()
    const result = rUsername({ lastname })

    expect(result).toContain(lastname)
  })
})
