import { expect, it, describe } from 'vitest'
import { rEmail } from '../..'

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
})
