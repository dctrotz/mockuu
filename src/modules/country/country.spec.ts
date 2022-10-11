import { expect, it, describe } from 'vitest'
import { rCountry } from '../..'

describe('country', () => {
  it('should return a country on code format', () => {
    const result = rCountry({ code: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })
})
