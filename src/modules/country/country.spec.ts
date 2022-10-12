import { expect, it, describe } from 'vitest'
import { randomCountry } from '../..'

describe('country', () => {
  it('should return a country on code format', () => {
    const result = randomCountry({ code: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })
})
