import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Color } from '../constants'

import Layout from '../components/layout'
import SEO from '../components/seo'

import SocialLinks from '../components/socialLinks'

const HOMEPAGE_IMAGE_QUERY = graphql`
  query HomePageImageQuery {
    file(relativePath: { regex: "/ronandconnolly-headshot/" }) {
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

const HomeSection = styled.section``

const AboutMeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .summary {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
    margin-top: 120px;
  }

  .head-shot {
    width: 300px;

    justify-content: center;
    align-items: center;
    img {
      display: flex;
      flex-direction: column-reverse;
    }
    .gatsby-image-wrapper {
      width: 300px;
      margin-bottom: 0px !important;
    }
  }
`

const MoreInfoSection = styled.section`
  background-color: ${Color.SECONDARY};
  padding: 30px;
  border-radius: 10px;
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
          title="Homepage"
          keywords={[
            `Ronan D. Connolly`,
            `Front-End Software Engineer`,
            `Web Developer`,
            `Angular Specialist`,
            `Finance Domain`,
            `West of Ireland`,
          ]}
        />
        <HomeSection role="region" aria-label="Summary of myself.">
          <AboutMeSection>
            <div className="summary">
              <h2>Hi, I'm Ronan D. Connolly</h2>
              <h4>
                A Front-End Software Engineer, Web Developer, and Angular
                Specialist who works in the finance domain.
              </h4>
            </div>
            <div class="head-shot">
              <Img
                fluid={data.file.childImageSharp.fluid}
                style={{
                  maxWidth: '400px',
                  marginBottom: '50px',
                }}
                alt={'A designer / developer at work.'}
              />
            </div>
          </AboutMeSection>
          <MoreInfoSection>
            <p>
              I love working with people who are passionate about technology and
              how it can be applied in meaningful ways.
            </p>

            <p>
              I take pride in my work, and take every opportunity as a chance to
              learn something new and grow.
            </p>

            <p>
              Get in touch if you're interested in collaborating on a project{' '}
              <span role="img" aria-label="rocket">
                🛠
              </span>
            </p>
          </MoreInfoSection>
        </HomeSection>
      </Layout>
    )}
  />
)

export default IndexPage
