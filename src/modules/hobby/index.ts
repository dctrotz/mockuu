import { mockuu } from '../core'
import data from 'src/locale/hobby'

export interface HobbyOptions {
  length?: number
}

/**
 * Generate a random hobby.
 *
 * @example
 *
 * randomHobby()
 *
 * @example
 *
 * randomHobby({ length: 4 })
 */

export function randomHobby<Options extends HobbyOptions> (
  options?: Options
): string | string[] {
  if (options?.length) {
    const hobbies = Array.from({ length: options?.length }, () => mockuu(data))

    return hobbies
  }

  return mockuu(data)
}
