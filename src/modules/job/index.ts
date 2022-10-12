import { mockuu } from '../core'
import data from 'src/locale/job'

/**
 * Generate a random job.
 *
 * @example
 *
 * randomJob()
 *
 */

export function randomJob () : string {
  return mockuu(data)
}
