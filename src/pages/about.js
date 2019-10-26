import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Color } from '../constants'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ABOUT_IMAGE_QUERY = graphql`
  query AboutImageQuery {
    file(relativePath: { regex: "/walk_in_the_city/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutYearSection = styled.section`
  margin-top: 50px;
  padding-bottom: 10px;

  p {
    clear: both;
  }

  .year-heading {
    display: block;

    h1 {
      color: ${Color.TEXT_DARK};
      float: left;
    }

    hr {
      background: ${Color.SECONDARY};
      height: 2px;

      width: 20%;
      float: left;

      margin-top: 24px;
      margin-left: 1%;
    }
  }
`

const aboutYear = (year, content) => (
  <AboutYearSection role="region" aria-label={year}>
    <div className="year-heading">
      <h1>{year}</h1>
      <hr />
    </div>
    <p>{content}</p>
  </AboutYearSection>
)

/**
 * The About Us page.
 */
const AboutPage = ({ location }) => (
  <StaticQuery
    query={ABOUT_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO title="About Me" keywords={[`about`]} />

        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
          alt={'A man strolling through a city listening to music.'}
        />

        <p>
          From a very young age I've had a keen interest in technology,
          business, finance/investing, and the outdoors.
          <br />
          currently reside in Galway City on the west coast of Ireland.
        </p>
        <p>
          I believe in doing whatever you want as long as it doesn't hurt anyone
          else <br /> (a motto I learned from the amazing writer{' '}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://rebeccaspelman.com"
          >
            Rebecca Spelman
          </OutboundLink>
          ).
          <br />
        </p>

        <p
          style={{
            marginBottom: '70px',
          }}
        >
          In my spare time I enjoy reading, gaming, board-games, trekking,
          learning, and spending time with my partner. <br /> I'm a coffee
          connoisseur, and really enjoy unwinding in a relaxed environment.
        </p>
      </Layout>
    )}
  />
)

export default AboutPage
