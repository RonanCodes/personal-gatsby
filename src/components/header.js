import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import cursive from '../images/personal-gatsby-cursive.svg'

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
      font-family: 'Open Sans', 'Droid Sans', serif;

      a {
        color: #8a4cd3;
        text-decoration: none;

        :visited {
          color: #8a4cd3;
          text-decoration: none;
        }

        &.active {
          color: #2a2a57;
          text-decoration: underline;
        }
      }
    }
  }
`

/**
 * A header that the layout uses for all the pages.
 */
const Header = ({ location }) => (
  <HeaderContainer>
    <Link to="/" className="logo-link">
      <img src={cursive} alt="Personal Gatsby Cursive" />
    </Link>

    <ul className="nav">
      <li>
        <Link
          className={
            location.pathname === '/about' || location.pathname === '/about/'
              ? 'active'
              : 'inactive'
          }
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={
            location.pathname === '/contact' ||
            location.pathname === '/contact/'
              ? 'active'
              : 'inactive'
          }
          to="/contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          className={
            location.pathname === '/portfolio' ||
            location.pathname === '/portfolio/'
              ? 'active'
              : 'inactive'
          }
          to="/portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          className={
            location.pathname === '/blog' || location.pathname === '/blog/'
              ? 'active'
              : 'inactive'
          }
          to="/blog"
        >
          Blog
        </Link>
      </li>
    </ul>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
