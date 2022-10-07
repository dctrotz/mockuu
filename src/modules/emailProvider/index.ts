import { faker, Options } from '../core'
import data from 'src/locale/email_provider'

export function rEmailProvider (options?: Options) : string | string[] {
  return faker(data, options)
}
