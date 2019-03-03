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

        <p
          style={{
            marginBottom: '70px',
          }}
        >
          Truffaut iceland 8-bit, ut chartreuse sriracha aliquip edison bulb
          austin snackwave ullamco adaptogen. Everyday carry pok pok narwhal
          aliqua reprehenderit iceland asymmetrical kale chips 90's portland
          keffiyeh hot chicken. Celiac banh mi pariatur marfa. Aesthetic
          pitchfork crucifix qui forage et do mixtape banh mi cardigan occupy
          viral. Duis green juice typewriter jean shorts et you probably haven't
          heard of them gastropub hot chicken in neutra sed fixie. Affogato
          labore duis meh, single-origin coffee farm-to-table salvia lo-fi
          tumblr veniam irure. Flexitarian velit pariatur cray 90's occaecat do
          retro officia bicycle rights street art put a bird on it semiotics.
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
