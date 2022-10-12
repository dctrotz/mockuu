import { expect, it, describe } from 'vitest'
import data from '../../locale/domain_suffix'
import { randomDomainSuffix } from '../..'

describe('domain suffix', () => {
  it('should return a random domain suffix', () => {
    const result = randomDomainSuffix()

    expect(data).toContain(result)
  })
})
