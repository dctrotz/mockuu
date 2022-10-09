import { describe, it, expect } from 'vitest'
import { rCardenalDirection } from '../src'

describe('cardinal direction', () => {
  it('should return an abbreviated direction', () => {
    const result = rCardenalDirection({ useAbbr: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })

  it('should return an array length of 20', () => {
    const result = rCardenalDirection({ length: 10 })

    expect(result).toHaveLength(10)
  })
})