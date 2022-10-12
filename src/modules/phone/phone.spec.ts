import { describe, it, expect } from 'vitest'
import { randomPhone } from '.'

describe('phone number', () => {
  it('should return a string', () => {
    const result = randomPhone()

    expect(typeof result).toBe('string')
  })
})
