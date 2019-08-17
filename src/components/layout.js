import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SocialLinks from '../components/socialLinks'

// Importing a css file auto applies it
import './layout.css'
import { Color, FontFamily } from '../constants'

import SiteHeader from './siteHeader'

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

    margin-bottom: 60px;

    width: 900px;
  }

  /* color: pink; */
  font-family: ${FontFamily.SECONDARY};
  font-size: 20px;

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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 5px solid ${Color.SECONDARY};

  .made-with-love {
    color: ${Color.GREY_LIGHTER};
    font-family: ${FontFamily.PRIMARY};
    align-items: flex-start;
    width: 500px;

    a,
    a :visited {
      text-decoration: none;
      color: ${Color.GREY_LIGHTER};
    }

    a :hover {
      text-decoration: underline;
    }
  }

  .social-links {
    display: flex;
    flex-direction: row-reverse;
    width: 500px;
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
          <SiteHeader
            siteTitle={data.site.siteMetadata.title}
            location={location}
          />

          <MainLayout className="site-content" role="main">
            <div>{children}</div>
          </MainLayout>

          <Footer role="contentinfo" aria-label="Creator signature">
            <section className="made-with-love">
              Made with 💜in Galway, Ireland
            </section>
            <section className="social-links">
              <SocialLinks />
            </section>
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
