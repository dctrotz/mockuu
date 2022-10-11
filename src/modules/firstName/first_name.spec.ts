import { expect, it, describe } from 'vitest'
import data from '../../locale/fist_name'
import { rFirstName } from '../..'

describe('firstName', () => {
  it('should return a random firstName', () => {
    const result = rFirstName()

    const names = [...data.female, ...data.male]

    expect(names).toContain(result)
  })

  it('should return a female firstName', () => {
    const result = rFirstName({ gender: 'female' })

    expect(data.female).include(result)
  })

  it('should return a male firstName', () => {
    const result = rFirstName({ gender: 'male' })

    expect(data.male).include(result)
  })
})
