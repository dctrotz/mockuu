export interface AvatarOptions {
  size?: number
}

/**
 * Generate a random avatar.
 *
 * @example
 *
 * randomAvatar()
 *
 * @example
 *
 * randomAvatar({ length: 2 })
 *
 * @example
 *
 * randomAvatar({ size: 400 }) // default is 200
 *
 */

export function randomAvatar<Options extends AvatarOptions> (options?: Options) {
  const size = options?.size ?? 200

  return `https://i.pravatar.cc/${size}`
}
