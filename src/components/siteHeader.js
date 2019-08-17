import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import masthead from '../images/masthead-ronandconnolly.svg'
import { Color, FontFamily } from '../constants'

const HeaderContainer = styled.header`
  background: radial-gradient(
    circle,
    rgba(174, 175, 232, 1) 0%,
    rgba(168, 117, 229, 1) 100%
  );

  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* puts space between items */
  justify-content: space-between;

  /* seem to not do anything */
  overflow: hidden;
  margin-bottom: 0;

  @media (min-width: 790px) {
    flex-direction: row;
  }

  img {
    margin-bottom: 0;
  }

  .masthead-link {
    img {
      /* padding-top: 20px; */
    }
  }

  nav {
    ul {
      display: flex;
      list-style: none;
      margin: 0;

      li {
        padding: 0 15px 0 15px;
        font-family: ${FontFamily.PRIMARY};

        a {
          color: white;
          text-decoration: none;
          transition: 0.3s;

          :visited {
            color: white;
            text-decoration: none;
          }

          &.active {
            color: white;
            text-decoration: underline;
          }
        }

        a:hover {
          color: white;
          transition: 0.3s;
        }
      }
    }
  }
`

const navItems = ['about', 'contact', 'portfolio', 'blog']

/**
 * Generates the navigation list via a list of strings (which refer to pages).
 */
const navList = (pathname, navItems) =>
  navItems.map(navItem => (
    <li key={navItem}>
      <Link
        className={
          pathname === `/${navItem}` || pathname === `/${navItem}/`
            ? 'active'
            : 'inactive'
        }
        to={`/${navItem}`}
      >
        {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
      </Link>
    </li>
  ))

/**
 * A header that the layout uses for all the pages.
 */
const SiteHeader = ({ location }) => (
  <HeaderContainer role="banner" aria-label="Main website header.">
    <Link to="/" className="masthead-link">
      <img src={masthead} alt="Ronan D. Connolly masthead text" />
    </Link>
    <nav aria-label="Site wide links" role="navigation">
      <ul>{navList(location.pathname, navItems)}</ul>
    </nav>
  </HeaderContainer>
)

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader
