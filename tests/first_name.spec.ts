import { expect, it, describe } from 'vitest'
import { rFirstName } from '../src'
import data from '../src/locale/fist_name'

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

  it('should return an array length of 5', () => {
    const result = rFirstName({ length: 5 })

    expect(result).toHaveLength(5)
  })

  it('should return an array of length of 8', () => {
    const result = rFirstName({ length: 8 })

    expect(result).toHaveLength(8)
  })

  it('should return an array length of 2, each with female firstName', () => {
    const [firstName1, firstName2] = rFirstName({ length: 2, gender: 'female' })

    expect(data.female).toContain(firstName1)
    expect(data.female).toContain(firstName2)
  })

  it('should return an array length of 3, each with a male firstName', () => {
    const [firstName1, firstName2, firstName3] = rFirstName({
      length: 3,
      gender: 'male'
    })

    expect(data.male).toContain(firstName1)
    expect(data.male).toContain(firstName2)
    expect(data.male).toContain(firstName3)
  })
})
