import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const ThanksPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SuccessImageQuery {
        file(relativePath: { regex: "/undraw_message_sent/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Layout location={location}>
        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              width: '500px',
              margin: 'auto',
            }}
          />

          <p
            style={{
              textAlign: 'center',
            }}
          >
            Thanks for getting in contact!
          </p>
        </div>
      </Layout>
    )}
  />
)

export default ThanksPage
