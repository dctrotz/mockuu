import { expect, it, describe } from 'vitest'
import { rCountry } from '../src'
import data from '../src/locale/country'

describe('country', () => {
  it('should return a country on code format', () => {
    const result = rCountry({ code: true })

    expect(result.length).toBeLessThanOrEqual(2)
  })

  it('should return an array length of 3, each with a random city', () => {
    const [country1, country2, country3] = rCountry({ length: 3 })

    expect(data.name).toContain(country1)
    expect(data.name).toContain(country2)
    expect(data.name).toContain(country3)
  })
})
