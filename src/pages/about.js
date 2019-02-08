import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query AboutImageQuery {
        file(relativePath: { regex: "/walk_in_the_city/" }) {
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

          {/* <Image imageName={'undraw_about_me_wa29.png'} /> */}

          {/* <h1>AboutPage Us</h1> */}
          <p>
            Lorem ipsum dolor amet pitchfork chicharrones brunch ugh twee
            microdosing intelligentsia kogi semiotics meh. Disrupt meditation
            letterpress next level marfa laboris. Godard messenger bag next
            level, mumblecore art party copper mug anim craft beer magna meh
            narwhal deserunt biodiesel glossier. Man braid scenester heirloom
            green juice occaecat culpa. Ex chicharrones deserunt master cleanse
            kogi ea salvia DIY lorem.
          </p>
        </div>
      </Layout>
    )}
  />
)

export default AboutPage
