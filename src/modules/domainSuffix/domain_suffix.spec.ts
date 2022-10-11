import { expect, it, describe } from 'vitest'
import data from '../../locale/domain_suffix'
import { rDomainSuffix } from '../..'

describe('domain suffix', () => {
  it('should return a random domain suffix', () => {
    const result = rDomainSuffix()

    expect(data).toContain(result)
  })

  it('should return an array lenght of 2, each with a random domain suffix', () => {
    const [suffix1, suffix2] = rDomainSuffix({ length: 2 })

    expect(data).toContain(suffix1)
    expect(data).toContain(suffix2)
  })

  it('should return an array lenght of 50', () => {
    const result = rDomainSuffix({ length: 50 })

    expect(result).toHaveLength(50)
  })
})
