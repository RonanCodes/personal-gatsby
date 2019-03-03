import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContactForm from '../components/contactForm'

const CONTACT_IMAGE_QUERY = graphql`
  query ContactImageQuery {
    file(relativePath: { regex: "/typewriter/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ContactSection = styled.section`
  text-align: center;
`

/**
 * The Contact Us page.
 */
const ContactPage = ({ location }) => (
  <StaticQuery
    query={CONTACT_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO title="Contact Form" keywords={[`contact form`]} />

        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              maxWidth: '500px',
              margin: 'auto',
            }}
          />
          <ContactSection>
            Reach out if you're interested in collaborating with me on a
            project, hiring me for a contract role, or if you just have a
            question.
          </ContactSection>

          <ContactForm />
        </div>
      </Layout>
    )}
  />
)

export default ContactPage
