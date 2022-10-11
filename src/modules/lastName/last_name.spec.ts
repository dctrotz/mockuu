import { describe, it, expect } from 'vitest'
import { rLastName } from '../..'
import data from '../../locale/last_name'

describe('lastName', () => {
  it('should return a random lastName', () => {
    const result = rLastName()

    expect(data).toContain(result)
  })
})
