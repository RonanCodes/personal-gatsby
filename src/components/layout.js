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

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;
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
        file(relativePath: { regex: "/bg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        {/* {useSpring({ opacity: 1, color: 'red' })} */}
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* styles gets passed in as the style for the child render prop */}
        {/* <Spring from={{ height: 100 }} to={{ height: 200 }}> */}
        <Spring
          from={{ height: location.pathname === '/' ? 100 : 200 }}
          to={{ height: location.pathname === '/' ? 200 : 100 }}
        >
          {/* <Spring style={useSpring({ opacity: 1, from: { opacity: 0 } })}> */}
          {/* this is a children render prop */}
          {styles => (
            <div style={{ ...styles, overflow: 'hidden' }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
            // <div>
            //   <Img fluid={data.file.childImageSharp.fluid} />
            // </div>
          )}
        </Spring>

        {/* {location.pathname === '/' && (
          <Img fluid={data.file.childImageSharp.fluid} />
        )} */}

        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
