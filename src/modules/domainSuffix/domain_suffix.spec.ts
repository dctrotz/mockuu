import { expect, it, describe } from 'vitest'
import data from '../../locale/domain_suffix'
import { rDomainSuffix } from '../..'

describe('domain suffix', () => {
  it('should return a random domain suffix', () => {
    const result = rDomainSuffix()

    expect(data).toContain(result)
  })
})
