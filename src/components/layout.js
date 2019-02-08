import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring'

import Header from './header'
import Archive from './archive'

import './layout.css'

const Site = styled.div`
  /* We're using flexbox! */
  display: flex;
  /* 100% of viewport height will be taken up by the height */
  min-height: 100vh;

  /* vertical flex */
  flex-direction: column;

  .site-content {
    /* grow to full in the size of the container it's in*/
    flex-grow: 1;
    margin: 10px 300px 0 300px;
  }

  /* The footer must show, so it shows at the bottom of the page since the site content grew to as much as it could */
`

const Footer = styled.footer`
  text-align: center;
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  margin: 1rem auto;
`

// const props = useSpring({ height: 200, from: { height: 100 } })
// const props = useSpring({ opacity: 1, from: { opacity: 0 } })

/* css grid: 1st col takes 4 fractions, then side bar to the right takes 1 fraction */

// const test = useSpring({
//   to: async (next, cancel) => {
//     await next({ opacity: 1, color: '#ffaaee' })
//     await next({ opacity: 0, color: 'rgb(14,26,19)' })
//   },
//   from: { opacity: 0, color: 'red' },
// })
// // ...
// // return <animated.div style={test}>I will fade in and out</animated.div>

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { regex: "/cover/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Site className="site">
          <Header
            siteTitle={data.site.siteMetadata.title}
            location={location}
          />

          {/* <Spring
            from={{ height: location.pathname === '/' ? 100 : 200 }}
            to={{ height: location.pathname === '/' ? 200 : 100 }}
          >
            {styles => (
              <div style={{ ...styles, overflow: 'hidden' }}>
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
            )}
          </Spring> */}

          {/* {location.pathname === '/' && (
          <Img fluid={data.file.childImageSharp.fluid} />
        )} */}
          <MainLayout className="site-content">
            <div>{children}</div>
            {/* <Archive /> */}
          </MainLayout>

          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://github.com/RonanC/personal-gatsby">
              Personal Gatsby
            </a>
          </Footer>
        </Site>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
