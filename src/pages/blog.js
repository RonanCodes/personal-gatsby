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
        mediumHandle
        devHandle
      }
    }
  }
`

const BlogSiteSection = styled.section`
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
        <ListingSection>
          <BlogSiteSection>
            For more articles check out:{` `}
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href={`https://dev.to/${site.siteMetadata.devHandle}`}
            >
              Dev
            </OutboundLink>
            {`    &    `}
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href={`https://medium.com/@${site.siteMetadata.mediumHandle}`}
            >
              Medium
            </OutboundLink>
          </BlogSiteSection>
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
