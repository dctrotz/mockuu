import { describe, it, expect } from 'vitest'
import { randomJob } from '../..'
import data from 'src/locale/job'

describe('job', () => {
  it('should return a random job', () => {
    const result = randomJob()

    expect(typeof result).toBe('string')
    expect(data).toContain(result)
  })
})
