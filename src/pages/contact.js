import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

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
          <p>
            Pickled cliche elit lyft jianbing messenger bag mixtape normcore.
            8-bit typewriter velit, schlitz locavore occupy deep v you probably
            haven't heard of them tattooed hot chicken meditation PBR&B
            scenester. Affogato magna put a bird on it hot chicken. Semiotics
            XOXO hashtag ut meggings scenester narwhal irony af. Salvia man bun
            distillery brunch chicharrones esse vaporware direct trade fanny
            pack pickled messenger bag flannel art party. Ugh laborum aliquip
            enamel pin do tofu.
          </p>

          <ContactForm />
        </div>
      </Layout>
    )}
  />
)

export default ContactPage
