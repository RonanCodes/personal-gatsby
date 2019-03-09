/**
 * Contains the color palette/scheme for this project.
 * All the colors used in this projects are taken from here and referenced in the styled components.
 *
 * Check colour accessibility here: https://webaim.org/resources/contrastchecker/
 * General info: https://www.codecademy.com/articles/what-is-digital-accessibility
 * /



/**
 * Defines the colors for the projects.
 * Note: the images and logos are not effected by the colors here.
 */
export const Color = Object.freeze({
  // Main shades
  PRIMARY: '#4C2FC9', // Header
  SECONDARY: '#AEAFE8', // Lighter shade (Nav)

  // Used for special text
  ACCENT_LARGE: '#5D269C', // Nav Links (Previous: #8a4cd3)
  ACCENT: '#36165A', // Nav Links
  ACCENT_LIGHT: '#a875e5',
  ACCENT_DARK: '#2A2A57',

  // Can leave as is
  TEXT_BLACK: '#000', // Regular text
  GREY_REGULAR: 'grey', // Unimportant text
  GREY_MEDIUM: '#e2e2e2', // Form border
  GREY_LIGHT: '#eaeaea', // Form background
  GREY_LIGHTER: '#b3b2c0', // Footer

  // Nav Cursive: #551a8b
})

/**
 * The fonts to be used in the project.
 */
export const Font = Object.freeze({
  SANS_SERIF: 'Open Sans',
  SERIF: 'EB Garamond', // Garton for masthead
})

/**
 * The font families for the project.
 */
export const FontFamily = Object.freeze({
  PRIMARY: `${Font.SANS_SERIF}, 'Droid Sans', serif`,
  SECONDARY: `${Font.SERIF}, 'Droid Serif', Georgia, serif`,
  TERTIARY: ``,
})
