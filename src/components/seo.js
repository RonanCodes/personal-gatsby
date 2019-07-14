import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO_DETAILS_QUERY = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitterHandle
        siteUrl
      }
    }
  }
`

/**
 * Creates the SEO header meta tags for the page.
 */
function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  linkImage,
  twitterDescription,
}) {
  return (
    <StaticQuery
      query={SEO_DETAILS_QUERY}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:image`,
                content: `${data.site.siteMetadata.siteUrl}${linkImage}`,
              },
              {
                name: `twitter:creator`,
                content: `@${data.site.siteMetadata.twitterHandle}`,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: twitterDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
