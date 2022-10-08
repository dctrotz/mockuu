import { describe, it, expect } from 'vitest'
import { rEmailProvider } from '../src'
import data from '../src/locale/email_provider'

describe('email provider', () => {
  it('should return a random email provider', () => {
    const result = rEmailProvider()

    expect(data).toContain(result)
  })

  it('should return an array length of 5', () => {
    const result = rEmailProvider({ length: 5 })

    expect(result).toHaveLength(5)
  })
})
