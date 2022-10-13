import { describe, it, expect } from 'vitest'
import { randomLongitude } from '../..'

describe('longitude', () => {
  it('should return a longitude with a precision of 4', () => {
    const result = randomLongitude()

    expect(typeof result).toBe('string')
    expect(result.split('.')[1]).toHaveLength(4)
  })

  it('should return a longitude between 40 & 50 with a precision of 10', () => {
    const result = randomLongitude({ max: 50, min: 40, precision: 10 })
    const [result1, result2] = result.split('.')

    expect(+result1).toBeGreaterThanOrEqual(40)
    expect(+result1).toBeLessThanOrEqual(50)
    expect(result2).toHaveLength(10)
  })
})
