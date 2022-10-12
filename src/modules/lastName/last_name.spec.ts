import { describe, it, expect } from 'vitest'
import { randomLastName } from '../..'
import data from '../../locale/last_name'

describe('lastName', () => {
  it('should return a random lastName', () => {
    const result = randomLastName()

    expect(data).toContain(result)
  })
})
