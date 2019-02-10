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
          title="Personal Gatsby - Homepage"
          keywords={[
            `personal gatsby`,
            `personal`,
            `gatsby`,
            `homepage`,
            `home`,
            `react`,
            `graphql`,
          ]}
        />

        <HomeSection>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              maxWidth: '600px',
              marginBottom: '50px',
            }}
          />
          <h1>
            Hi, I'm Gatsby. A Developer, Designer, &amp; Outdoor Adventurer.
          </h1>
          <p>
            Lorem ipsum dolor amet minim plaid deep v adaptogen wayfarers.
            Pickled ullamco hell of voluptate. Stumptown scenester woke austin
            echo park church-key sed plaid do quinoa fanny pack tumeric celiac.
            Sriracha vinyl butcher deserunt. In twee unicorn, chartreuse
            chicharrones mollit elit aesthetic 8-bit irony gentrify. Culpa
            kitsch direct trade forage irure squid VHS.
          </p>

          <p>
            Nulla scenester kitsch whatever dolore cloud bread banh mi, air
            plant sartorial migas XOXO green juice umami selvage. Keffiyeh
            vexillologist gluten-free echo park nostrud meditation wayfarers.
            Selvage labore four dollar toast non seitan offal. Selvage adaptogen
            dreamcatcher neutra, distillery poutine humblebrag ut minim quinoa
            vaporware keytar.
          </p>
        </HomeSection>

        <SocialLinks />
      </Layout>
    )}
  />
)

export default IndexPage
