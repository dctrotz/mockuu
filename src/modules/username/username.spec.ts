import { describe, it, expect } from 'vitest'
import { randomUsername, randomLastName } from '../..'

describe('username', () => {
  const numbersRegex: RegExp = /[0-9]/g

  it('should not contain numbers', () => {
    const result = randomUsername()

    expect(result).not.match(numbersRegex)
  })

  it('should contain the lastName', () => {
    const lastname = randomLastName()
    const result = randomUsername({ lastname })

    expect(result).toContain(lastname)
  })

  it('should contain numbers', () => {
    const result = randomUsername({ numbers: true })

    expect(result).match(numbersRegex)
  })
})
