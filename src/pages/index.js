import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SocialLinks from '../components/socialLinks'

const HOMEPAGE_IMAGE_QUERY = graphql`
  query HomePageImageQuery {
    file(relativePath: { regex: "/undraw_designer_kcp7_cropped/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    site {
      siteMetadata {
        twitterHandle
        linkedInHandle
        githubHandle
        email
      }
    }
  }
`

const HomeSection = styled.section`
  margin-top: 30px;
`

/**
 * The Home page.
 */
const IndexPage = ({ location }) => (
  <StaticQuery
    query={HOMEPAGE_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO
          title="Ronan Connolly - Homepage"
          keywords={[`ronan connolly`, `front-end`, `developer`, `designer`]}
        />

        <HomeSection>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              maxWidth: '600px',
              marginBottom: '50px',
            }}
          />
          <h2>
            Hi, I'm Ronan Connolly.
            <br />A Front-End Developer, UI Designer, Entrepreneur, and Outdoor
            Adventurer.
          </h2>
          <p>
            I love working with people who are passionate about technology and
            how it can be applied in meaningful ways.
          </p>

          <p>
            I'm a forever student, who will never stop learning.
            <br />
            When I'm working I can't help but resist on making things better
            along the way.
          </p>

          <p>
            Get in touch if you're interested in collaborating on a project{' '}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </p>
        </HomeSection>

        <SocialLinks />
      </Layout>
    )}
  />
)

export default IndexPage
