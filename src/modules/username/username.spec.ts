import { describe, it, expect } from 'vitest'
import { randomUsername, randomLastName } from '../..'

describe('username', () => {
  const numbersRegex: RegExp = /[1-9]/

  it('should not contain numbers', () => {
    const result = randomUsername()

    expect(result).not.match(numbersRegex)
  })

  it('should contain the lastName', () => {
    const lastname : string = randomLastName()
    const result = randomUsername({ lastname })

    expect(result).toContain(lastname)
  })
})
