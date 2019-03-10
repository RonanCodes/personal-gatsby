import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NOT_FOUND_QUERY = graphql`
  query NotFoundImageQuery {
    file(relativePath: { regex: "/not_found/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

/**
 * The 404 Not Found page.
 */
const NotFoundPage = () => (
  <StaticQuery
    query={NOT_FOUND_QUERY}
    render={data => (
      <Layout>
        <SEO title="404: Not found" keywords={[`404`]} />

        {/* <h1>NOT FOUND</h1> */}
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
          alt={'404 page not found error.'}
        />

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )}
  />
)

export default NotFoundPage
