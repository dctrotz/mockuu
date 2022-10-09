import { describe, it, expect } from 'vitest'
import { rCity } from '../src'

describe('city', () => {
  it('should return a random city', () => {
    const result = rCity()

    expect(result).toBeTypeOf('string')
  })
})
