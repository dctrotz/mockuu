import { describe, it, expect } from 'vitest'
import { rEmailProvider } from '../..'
import data from '../../locale/email_provider'

describe('email provider', () => {
  it('should return a random email provider', () => {
    const result = rEmailProvider()

    expect(data).toContain(result)
  })
})
