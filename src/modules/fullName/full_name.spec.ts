import { describe, it, expect } from 'vitest'
import { rFullName, rFirstName, rLastName } from '../..'

describe('fullname', () => {
  it('should contain the first name passed as a parameter', () => {
    const firstname = rFirstName()
    const result = rFullName({ firstname })

    expect(result).toContain(firstname)
  })

  it('should contain the last name passed as a parameter', () => {
    const lastname = rLastName()
    const result = rFullName({ lastname })

    expect(result).toContain(lastname)
  })
})
