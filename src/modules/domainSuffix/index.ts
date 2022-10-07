import { faker, Options } from '../core'
import data from '../../locale/domain_suffix'

export function rDomainSuffix (options?: Options) : string | string[] {
  return faker(data, options)
}
