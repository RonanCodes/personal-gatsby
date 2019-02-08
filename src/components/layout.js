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
  /* .site { */
  /* display: flex;
  min-height: 100vh;
  flex-direction: column; */
  /* html {
    height: 100%;
    background: brown;
  } */

  /* .site { */
  /* min-height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    background: blue; */
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: coral;
  /* } */

  /* min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto; */
  /* height: 100%;
  display: flex;
  flex-direction: column; */

  /* display: flex;
  flex-direction: column; */
  /* } */

  .site-content {
    flex-grow: 1;
    /* flex: 1 0 auto; */
    /* margin-top: auto; */
    background: yellow;
    /* flex: 1 0 auto; */
  }

  footer {
    background: pink;
    /* flex-shrink: 0; */

    /* grid-row-start: 6; */
    /* grid-row-end: 7; */
    flex-shrink: 0;
  }
`

const Footer = styled.footer`
  text-align: center;
  /* border: 1px solid black; */
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  /* display: grid; */
  /* grid-template-columns: 3fr 1fr; */
  /* gap: 40px; */
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
