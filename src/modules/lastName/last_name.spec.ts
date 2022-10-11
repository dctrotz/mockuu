import { describe, it, expect } from 'vitest'
import { rLastName } from '../..'
import data from '../../locale/last_name'

describe('lastName', () => {
  it('should return a random lastName', () => {
    const result = rLastName()

    expect(data).toContain(result)
  })

  it('should return an array length of 4', () => {
    const result = rLastName({ length: 4 })

    expect(result).toHaveLength(4)
  })

  it('should return an array length of 2, each with a random LastName', () => {
    const [lastName1, lastName2] = rLastName({ length: 2 })

    expect(data).toContain(lastName1)
    expect(data).toContain(lastName2)
  })
})
