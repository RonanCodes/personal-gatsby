module.exports = {
  siteMetadata: {
    title: `Ronan D. Connolly`,
    description: `Front-End Developer, UI Designer, Entrepreneur, and Outdoor Adventurer.`,
    author: `Ronan D. Connolly <hello@RonanDConnolly.com>`,
    siteUrl: `https://RonanDConnolly.com`,
    twitterHandle: `RonanDConnolly`,
    linkedInHandle: `RonanDConnolly`,
    githubHandle: `RonanDConnolly`,
    email: `hello@RonanDConnolly.com`,
    mapLink: `https://www.google.ie/maps/place/Galway/@53.2839064,-9.0837657,13z/data=!3m1!4b1!4m5!3m4!1s0x485b93955a2d5bff:0x32b1b440a495281!8m2!3d53.270668!4d-9.0567905`,
    mediumHandle: `RonanDConnolly`,
    devHandle: `RonanDConnolly`,
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
        name: `Ronan D. Connolly`,
        short_name: `RDC`,
        start_url: `/`,
        background_color: `#AEAFE8`,
        theme_color: `#4C2FC9`,
        display: `minimal-ui`,
        icon: `src/images/favicon-r.png`, // This path is relative to the root of the site.
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
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // defaults to false
              usePrefix: true,
              providers: {
                // Important to exclude providers
                // that adds js to the page.
                // If you do not need them.
                exclude: ['Reddit'],
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135481812-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: '0',
        // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com',
      },
    },
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://forum.ronandconnolly.com',
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`, // Make sure this is last
  ],
}
