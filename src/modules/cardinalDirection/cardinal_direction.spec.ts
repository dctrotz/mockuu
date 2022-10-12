import { describe, it, expect } from 'vitest'
import { randomDirection } from '../..'

describe('cardinal direction', () => {
  it('should return an abbreviated direction', () => {
    const result = randomDirection({ useAbbr: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })
})
