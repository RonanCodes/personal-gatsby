import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import cursive from '../images/name-cursive.svg'
import { Color, FontFamily } from '../constants'

const HeaderContainer = styled.div`
  background: #aeafe8;

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

  .logo-link {
    img {
      padding-top: 20px;
    }
  }

  .nav {
    display: flex;
    list-style: none;
    margin: 0;

    li {
      padding: 0 15px 0 15px;
      font-family: ${FontFamily.PRIMARY};

      a {
        color: ${Color.ACCENT};
        text-decoration: none;
        transition: 0.3s;

        :visited {
          color: ${Color.ACCENT};
          text-decoration: none;
        }

        &.active {
          color: ${Color.TEXT_DARK};
          text-decoration: underline;
        }
      }

      a:hover {
        color: ${Color.ACCENT_DARK};
        transition: 0.3s;
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
    <li>
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
const Header = ({ location }) => (
  <HeaderContainer>
    <Link to="/" className="logo-link">
      <img src={cursive} alt="Header Name Cursive" />
    </Link>

    <ul className="nav">{navList(location.pathname, navItems)}</ul>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
