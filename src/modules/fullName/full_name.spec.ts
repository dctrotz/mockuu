import { describe, it, expect } from 'vitest'
import { randomFullName, randomFirstName, randomLastName } from '../..'

describe('fullname', () => {
  it('should contain the first name passed as a parameter', () => {
    const firstname = randomFirstName()
    const result = randomFullName({ firstname })

    expect(result).toContain(firstname)
  })

  it('should contain the last name passed as a parameter', () => {
    const lastname = randomLastName()
    const result = randomFullName({ lastname })

    expect(result).toContain(lastname)
  })
})
