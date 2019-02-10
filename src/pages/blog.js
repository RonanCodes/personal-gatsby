import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BlogListing from '../components/blogListing'

import { ListingMain } from '../styled-components'

const BlogSiteSection = styled.section`
  width: 100%;
  background: #eaeaea;
  color: #9056d4;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  font-size: 18px;

  a,
  a :visited {
    text-decoration: none;
    color: #4c2fc9;
  }
`

const BlogPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        site {
          siteMetadata {
            mediumHandle
            devHandle
          }
        }
      }
    `}
    render={({ site }) => (
      <Layout location={location}>
        <SEO
          title="Blog Posts"
          keywords={[`blog posts`, `blog`, `posts`, `articles`, `article`]}
        />
        <ListingMain>
          <BlogSiteSection>
            For more articles check out:{` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://dev.to/${site.siteMetadata.devHandle}`}
            >
              Dev
            </a>
            {`    &    `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://medium.com/@${site.siteMetadata.mediumHandle}`}
            >
              Medium
            </a>
          </BlogSiteSection>
          <div
            style={{
              paddingTop: '30px',
            }}
          >
            <BlogListing />
          </div>
        </ListingMain>
      </Layout>
    )}
  />
)

export default BlogPage
