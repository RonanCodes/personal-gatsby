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

export function getAltImageNameFromPath(coverImage) {
  return coverImage.substr(
    coverImage.lastIndexOf('/') + 1,
    coverImage.lastIndexOf('.') - coverImage.lastIndexOf('/') - 1
  )
}
