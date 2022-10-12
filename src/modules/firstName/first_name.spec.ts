import { expect, it, describe } from 'vitest'
import data from '../../locale/fist_name'
import { randomFirstName } from '../..'

describe('firstName', () => {
  it('should return a random firstName', () => {
    const result = randomFirstName()

    const names = [...data.female, ...data.male]

    expect(names).toContain(result)
  })

  it('should return a female firstName', () => {
    const result = randomFirstName({ gender: 'female' })

    expect(data.female).include(result)
  })

  it('should return a male firstName', () => {
    const result = randomFirstName({ gender: 'male' })

    expect(data.male).include(result)
  })
})
