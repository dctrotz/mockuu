import { describe, it, expect } from 'vitest'
import { randomZipCode } from '../..'

describe('zip code', () => {
  it('should return a random zipcode', () => {
    const result = randomZipCode()

    expect(typeof result).toBe('string')
  })
})
