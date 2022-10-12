import { describe, it, expect } from 'vitest'
import { randomAge } from 'src'

describe('age', () => {
  it('should return a random age between 0 and 100', () => {
    const result = randomAge()

    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(100)
  })

  it('should return a random age between 10 and 20', () => {
    const result = randomAge({ min: 10, max: 20 })

    expect(result).toBeGreaterThanOrEqual(10)
    expect(result).toBeLessThanOrEqual(20)
  })

  it('should return a random age between 50 and 55', () => {
    const result = randomAge({ min: 50, max: 55 })

    expect(result).toBeGreaterThanOrEqual(50)
    expect(result).toBeLessThanOrEqual(55)
  })
})
