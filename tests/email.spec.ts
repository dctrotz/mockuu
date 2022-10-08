import { expect, it, describe } from 'vitest'
import { rEmail } from '../src'

describe('email', () => {
  const emailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  it('should contain the lastName', () => {
    const result = rEmail({ lastName: 'Romero' })

    expect(result).toContain('Romero')
  })

  it('should contain the firstName', () => {
    const result = rEmail({ firstName: 'Julian' })

    expect(result).toContain('Julian')
  })

  it('should contain the suffix and be a valid email format', () => {
    const result = rEmail({ suffix: 'yahoo', separator: '' })

    expect(result.split('.')[1]).toEqual('yahoo')
    expect(result).match(emailRegex)
  })

  it('should return a valid email format', () => {
    const result = rEmail()

    expect(result).match(emailRegex)
  })

  it('should return an array length of 20', () => {
    const result = rEmail({ length: 20 })

    expect(result).toHaveLength(20)
  })

  it('should return an array length of 2, each with a random email', () => {
    const [email1, email2] = rEmail({ length: 2 })

    expect(email1).match(emailRegex)
    expect(email2).match(emailRegex)
  })
})
