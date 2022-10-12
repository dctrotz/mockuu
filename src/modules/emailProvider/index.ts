import { mockuu } from '../core'
import data from '../../locale/email_provider'

/**
 * Generate a random email provider.
 *
 * @example
 *
 * randomEmailProvider()
 *
 */

export function randomEmailProvider (): string {
  return mockuu(data)
}
