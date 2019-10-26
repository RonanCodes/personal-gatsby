import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogListing from '../components/blogListing'
import { ListingSection } from '../styled-components'
import { Color, FontFamily } from '../constants'

const BLOG_PAGE_QUERY = graphql`
  query BlogPageQuery {
    site {
      siteMetadata {
        devHandle
        linkedInHandle
      }
    }
  }
`

const BlogContent = styled.div`
  width: 100%;

  background: ${Color.GREY_LIGHT};
  color: ${Color.TERTIARY};
  text-align: center;
  font-family: ${FontFamily.PRIMARY};
  padding: 20px;
  font-size: 18px;

  a,
  a :visited {
    text-decoration: none;
    color: ${Color.PRIMARY};
  }
`

/**
 * The Blog page.
 */
const BlogPage = ({ location }) => (
  <StaticQuery
    query={BLOG_PAGE_QUERY}
    render={({ site }) => (
      <Layout location={location}>
        <SEO title="Blog Posts" keywords={[`blog`]} />
        <ListingSection
          role="region"
          aria-label="Places where these articles are syndicated to."
        >
          <BlogContent>
            For more articles check out:{` `}
            <OutboundLink
              aria-label="Dev.to"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://dev.to/${site.siteMetadata.devHandle}`}
            >
              Dev
            </OutboundLink>
            <span aria-label="or">{`    ||    `}</span>
            <OutboundLink
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.linkedin.com/in/${site.siteMetadata.linkedInHandle}/detail/recent-activity/posts/`}
            >
              LinkedIn
            </OutboundLink>
          </BlogContent>
          <div
            style={{
              paddingTop: '30px',
            }}
          >
            <BlogListing />
          </div>
        </ListingSection>
      </Layout>
    )}
  />
)

export default BlogPage
