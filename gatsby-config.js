module.exports = {
  siteMetadata: {
    title: `Personal Gatsby`,
    description: `Get your personal website kick-started with this Personal Gatsby Starter Project`,
    author: `Ronan Connolly <hi@ronanconnolly.ie>`,
    siteUrl: `https://silly-agnesi-43a1cd.netlify.com/`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Gatsby`,
        short_name: `PG`,
        start_url: `/`,
        background_color: `#AEAFE8`,
        theme_color: `#AEAFE8`,
        display: `minimal-ui`,
        icon: `src/images/personal-gatsby-logo-no-text.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
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
