import { mockuu, Options } from '../core'

export interface AvatarOptions extends Options {
  size?: number
}

/**
 * Generate a random avatar.
 *
 * @param {Options} [options]
 *
 * @example
 *
 * rAvatar()
 *
 * @example
 *
 * rAvatar({ length: 2 })
 *
 * @example
 *
 * rAvatar({ size: 400 })
 *
 * @returns A string or an array of strings.
 */

export function rAvatar (options?: AvatarOptions) {
  const size = options?.size ?? 200

  return mockuu(() => `https://i.pravatar.cc/${size}`, options)
}
