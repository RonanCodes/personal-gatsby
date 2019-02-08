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
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
