import { describe, it, expect } from 'vitest'
import { randomEmailProvider } from '../..'
import data from '../../locale/email_provider'

describe('email provider', () => {
  it('should return a random email provider', () => {
    const result = randomEmailProvider()

    expect(data).toContain(result)
  })
})
