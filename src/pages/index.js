import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query HomeImageQuery {
        file(relativePath: { regex: "/undraw_designer_kcp7_cropped/" }) {
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
          {/* <Image /> */}
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              width: '600px',
              marginBottom: '50px',
              // margin: 'auto',
              // float: 'left',
              // display: 'block',
              // textCenter: 'left',
            }}
          />
          <h2>Hi I'm Gatsby. I'm a developer and designer.</h2>
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

export default IndexPage
