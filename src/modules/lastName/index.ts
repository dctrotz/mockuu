import data from '../../locale/lastName'
import { faker, Options } from '../core'

export function rLastName (options?: Options) {
  return faker(data, options)
}
