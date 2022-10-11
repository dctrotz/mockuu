import { describe, it, expect } from 'vitest'
import { rCardenalDirection } from '../..'

describe('cardinal direction', () => {
  it('should return an abbreviated direction', () => {
    const result = rCardenalDirection({ useAbbr: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })
})
