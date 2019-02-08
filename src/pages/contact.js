import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

const ContactPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query ContactImageQuery {
        file(relativePath: { regex: "/typewriter/" }) {
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
          <p>
            Lorem ipsum dolor amet pitchfork chicharrones brunch ugh twee
            microdosing intelligentsia kogi semiotics meh. Disrupt meditation
            letterpress next level marfa laboris. Godard messenger bag next
            level, mumblecore art party copper mug anim craft beer magna meh
            narwhal deserunt biodiesel glossier. Man braid scenester heirloom
            green juice occaecat culpa. Ex chicharrones deserunt master cleanse
            kogi ea salvia DIY lorem.
          </p>

          {/* <ContactForm /> */}
          {/* PUT FORM DIRECTLY IN HERE< NOT AS A COMMPONENT */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            actoin="/pages/success"
          >
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </Layout>
    )}
  />
)

export default ContactPage
