export interface AvatarOptions {
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

export function randomAvatar (options?: AvatarOptions) {
  const size = options?.size ?? 200

  return `https://i.pravatar.cc/${size}`
}
