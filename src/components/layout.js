import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

// Importing a css file auto applies it
import './layout.css'
import { Color, FontFamily } from '../constants'

import Header from './header'

const LAYOUT_PAGE_QUERY = graphql`
  query LayoutPageQuery {
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
`

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
    margin-bottom: 60px;

    width: 900px;
  }

  /* color: pink; */
  font-family: ${FontFamily.SECONDARY};
  font-size: 18px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FontFamily.PRIMARY};
  }

  /* The footer must show, so it shows at the bottom of the page since the site content grew to as much as it could */
`

const Footer = styled.footer`
  text-align: center;
  color: ${Color.GREY_LIGHTER};
  margin-bottom: 5px;

  a,
  a :visited {
    text-decoration: none;
    color: ${Color.GREY_LIGHTER};
  }

  a :hover {
    text-decoration: underline;
  }
`

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  margin: 1rem auto;
`

/**
 * A wrapper for all the pages within the site.
 * We set the main styles of the website inside this component.
 */
const Layout = ({ children, location }) => (
  <StaticQuery
    query={LAYOUT_PAGE_QUERY}
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

          <Footer role="contentinfo">
            © {new Date().getFullYear()}, Built with 💛by
            {` `}
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://ronanc.xyz"
            >
              Ronan Connolly
            </OutboundLink>
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
