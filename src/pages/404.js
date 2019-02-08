import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <StaticQuery
    query={graphql`
      query NotFOundImageQuery {
        file(relativePath: { regex: "/not_found/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="404: Not found" />
        {/* <h1>NOT FOUND</h1> */}
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            width: '500px',
            margin: 'auto',
          }}
        />

        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )}
  />
)

export default NotFoundPage
