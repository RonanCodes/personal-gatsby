import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Importing a css file auto applies it
import './layout.css'

import Header from './header'

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

    margin-top: 10px;
    margin-bottom: 0;

    width: 1100px;
  }

  /* color: pink; */
  font-family: 'EB Garamond', 'Droid Serif', Georgia, serif;
  font-size: 18px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Open Sans', 'Droid Sans', serif;
  }

  /* The footer must show, so it shows at the bottom of the page since the site content grew to as much as it could */
`

const Footer = styled.footer`
  text-align: center;
  color: #b3b2c0;

  a,
  a :visited {
    text-decoration: none;
    color: #b3b2c0;
  }
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  margin: 1rem auto;
`
// This component is the wrapper for all the pages within the site.
// We set the main styles of the website inside this component.
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

          <MainLayout className="site-content">
            <div>{children}</div>
          </MainLayout>

          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/RonanC/personal-gatsby"
            >
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
