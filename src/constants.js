/**
 * Contains the color palette/scheme for this project.
 * All the colors used in this projects are taken from here and referenced in the styled components.
 */

export const Color = Object.freeze({
  PRIMARY: '#4C2FC9', // Header
  SECONDARY: '#AEAFE8', // Lighter shade
  ACCENT: '#8a4cd3', // Special text
  TEXT_LIGHT: '#a875e5',
  TEXT_DARK: '#2A2A57',

  TEXT_BLACK: '#000',
  GREY_REGULAR: 'grey', // Text
  GREY_MEDIUM: '#e2e2e2', // Border
  GREY_LIGHT: '#eaeaea', // Background
  GREY_LIGHTER: '#b3b2c0', // Footer
})

export const Font = Object.freeze({
  SANS_SERIF: 'Open Sans',
  SERIF: 'EB Garamond',
})

export const FontFamily = Object.freeze({
  PRIMARY: `${Font.SANS_SERIF}, 'Droid Sans', serif`,
  SECONDARY: `${Font.SERIF}, 'Droid Serif', Georgia, serif`,
  TERTIARY: ``,
})
