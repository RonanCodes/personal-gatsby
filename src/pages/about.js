import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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

      margin-top: 20px;
      margin-left: 1%;
    }
  }
`

const aboutYear = (year, content) => (
  <AboutYearSection>
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
        <SEO title="About Us" keywords={[`about`]} />

        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
        />

        <p>
          From a very young age I've had a keen interest in technology, business
          and finance. Indeed my whole family is interested in these things, so
          I gained the interest through osmosis.
          <br />
          The West of Ireland is where I was born and raised. I now reside in
          Galway City on the west coast.
        </p>
        <p>
          I believe in doing whatever you want as long as it doesn't hurt anyone
          else (a motto I learned from the amazing writer{' '}
          <a href="http://rebeccaspelman.com">Rebecca Spelman</a>).
          <br />
          Some of my over arching goals in life are to become a leader in the
          Front-End development community, become a digital nomad (work while
          travelling), start my own business (leveraging modern technologies),
          and to become financially intelligent.
        </p>

        <p
          style={{
            marginBottom: '70px',
          }}
        >
          In my spare time I enjoy reading, playing board-games, trekking,
          jogging, and learning (technology, business, and finance mostly). I'm
          a coffee connoisseur and really enjoy unwinding in a relaxed
          environment when I get some down time.
        </p>

        {aboutYear(
          2019,
          `Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
              vinegar trust fund tattooed cliche, magna williamsburg mollit.
              Fingerstache scenester williamsburg drinking vinegar raclette
              kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
              of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
              cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
              duis listicle waistcoat exercitation adipisicing post-ironic hammock
              labore.`
        )}

        {aboutYear(
          2018,
          `Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
              vinegar trust fund tattooed cliche, magna williamsburg mollit.
              Fingerstache scenester williamsburg drinking vinegar raclette
              kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
              of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
              cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
              duis listicle waistcoat exercitation adipisicing post-ironic hammock
              labore.`
        )}

        {aboutYear(
          2017,
          `Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
              vinegar trust fund tattooed cliche, magna williamsburg mollit.
              Fingerstache scenester williamsburg drinking vinegar raclette
              kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
              of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
              cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
              duis listicle waistcoat exercitation adipisicing post-ironic hammock
              labore.`
        )}

        {aboutYear(
          2016,
          `Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
              vinegar trust fund tattooed cliche, magna williamsburg mollit.
              Fingerstache scenester williamsburg drinking vinegar raclette
              kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
              of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
              cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
              duis listicle waistcoat exercitation adipisicing post-ironic hammock
              labore.`
        )}

        {aboutYear(
          2015,
          `Tbh +1 offal humblebrag lorem leggings tote bag pop-up ugh. Drinking
              vinegar trust fund tattooed cliche, magna williamsburg mollit.
              Fingerstache scenester williamsburg drinking vinegar raclette
              kickstarter, master cleanse chartreuse mixtape non microdosing. Hell
              of yuccie green juice artisan tilde. Bespoke tacos shaman trust fund
              cliche. Magna jean shorts readymade roof party adaptogen +1 tofu
              duis listicle waistcoat exercitation adipisicing post-ironic hammock
              labore.`
        )}
      </Layout>
    )}
  />
)

export default AboutPage
