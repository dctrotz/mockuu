import { expect, it, describe } from 'vitest'
import { randomEmail } from '../..'

describe('email', () => {
  const emailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  it('should contain the lastName', () => {
    const result = randomEmail({ lastName: 'Romero' })

    expect(result).toContain('Romero')
  })

  it('should contain the firstName', () => {
    const result = randomEmail({ firstName: 'Julian' })

    expect(result).toContain('Julian')
  })

  it('should contain the suffix and be a valid email format', () => {
    const result = randomEmail({ suffix: 'yahoo', separator: '' })

    expect(result.split('.')[1]).toEqual('yahoo')
    expect(result).match(emailRegex)
  })

  it('should return a valid email format', () => {
    const result = randomEmail()

    expect(result).match(emailRegex)
  })
})
