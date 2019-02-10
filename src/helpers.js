/**
 * Contains all the shared helper functions.
 */

/**
 * Turns a string into a valid slug url
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Extracts the last part of the passed in path.
 */
export function extractLastStringInPath(uriPath) {
  return uriPath.substr(
    uriPath.lastIndexOf('/') + 1,
    uriPath.lastIndexOf('.') - uriPath.lastIndexOf('/') - 1
  )
}
