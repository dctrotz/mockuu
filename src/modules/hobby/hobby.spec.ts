import { describe, it, expect } from 'vitest'
import { randomHobby } from '../..'
import data from 'src/locale/hobby'

describe('hobby', () => {
  it('should return a random hobby', () => {
    const result = randomHobby()

    expect(typeof result).toBe('string')
    expect(data).toContain(result)
  })

  it('should return an array length of 5', () => {
    const result = randomHobby({ length: 5 })

    expect(typeof result).toBe('object')
    expect(result).toHaveLength(5)
  })
})
