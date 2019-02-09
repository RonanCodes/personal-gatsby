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

export function getAltImageNameFromPath(cover_image) {
  return cover_image.substr(
    cover_image.lastIndexOf('/') + 1,
    cover_image.lastIndexOf('.') - cover_image.lastIndexOf('/') - 1
  )
}
