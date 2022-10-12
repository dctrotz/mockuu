import { describe, it, expect } from 'vitest'
import { randomCity } from '../..'

describe('city', () => {
  it('should return a random city', () => {
    const result = randomCity()

    expect(result).toBeTypeOf('string')
  })
})
