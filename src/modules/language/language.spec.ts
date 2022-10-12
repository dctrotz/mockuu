import { describe, it, expect } from 'vitest'
import { randomLanguage } from '../..'
import data from 'src/locale/language'

describe('job', () => {
  it('should return a random language', () => {
    const result = randomLanguage()

    expect(typeof result).toBe('string')
    expect(data).toContain(result)
  })
})
