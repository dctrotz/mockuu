import { expect, it, describe } from 'vitest'
import { rEmail } from '../src'

describe('email', () => {
  it('a', () => {
    const result = rEmail({
      firstName: 'mateocodes',
      separator: '',
      suffix: 'com',
      lastName: 'gon',
      provider: 'gmail'
    })

    expect(result).toEqual('mateocodesgon@gmail.com')
  })
})
