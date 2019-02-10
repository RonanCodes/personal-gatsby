module.exports = {
  siteMetadata: {
    title: `Personal Gatsby`,
    description: `Get your personal website kick-started with this Personal Gatsby Starter Project`,
    author: `Ronan Connolly <hi@ronanconnolly.ie>`,
    siteUrl: `https://personalgatsby.xyz`,
    twitterHandle: `_RonanC`,
    linkedInHandle: `RonanConnolly`,
    githubHandle: `RonanC`,
    email: `hi@ronanconnolly.ie`,
    mapLink: `https://www.google.ie/maps/place/Galway/@53.2839064,-9.0837657,13z/data=!3m1!4b1!4m5!3m4!1s0x485b93955a2d5bff:0x32b1b440a495281!8m2!3d53.270668!4d-9.0567905`,
    mediumHandle: `_RonanC`,
    devHandle: `ronanc`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Gatsby`,
        short_name: `PG`,
        start_url: `/`,
        background_color: `#AEAFE8`,
        theme_color: `#4C2FC9`,
        display: `minimal-ui`,
        icon: `src/images/personal-gatsby-logo-no-text.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Droid Sans',
            'Droid Serif',
            'EB Garamond',
            'Roboto',
            'Roboto Slab',
            'Roboto Mono',
            'Open Sans',
          ],
        },
        typeKit: {
          families: ['Garamond'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline', // this should be after the manifest file.
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // make sure this is last
  ],
}
