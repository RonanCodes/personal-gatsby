import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/personal-gatsby-logo.png'
import cursive from '../images/personal-gatsby-cursive.png'

const HeaderWrapper = styled.div`
  background: #aeafe8;
  /* margin-bottom: 1.45rem; */

  margin: 0px;

  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 10px 20px 0px 20px;

  /* margin: 0 auto; */
  /* max-width: 960px; */
  /* padding: 0.3rem; */
  /* margin-left: 20px; */

  /* display: inline-block; */

  /* a {
    padding: 0px !important;
    margin: 0px !important;
  } */

  .logo-link {
    float: left;
    /* height: 100px; */

    img {
      /* logo */
      /* height: 100px; */
      /* cursive */
      height: 80px;
      padding-top: 20px;
    }
  }

  .nav {
    /* background: yellow; */
    float: right;
    margin-top: 40px;

    li {
      display: inline;
      margin: 40px;
      /* font-family: 'Open Sans'; */
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      a {
        color: #ad76ed;
        text-decoration: none;

        :visited {
          color: #ad76ed;
          text-decoration: none;
        }

        &.active {
          /* color: #dd0244; */
          color: #5b00b7;

          text-decoration: underline;
        }
      }
    }
  }
`
// /* ${
//           ({location}) => location.pathname ===
//         } */
const Header = ({ siteTitle, location }) => (
  <HeaderWrapper>
    <HeaderContainer>
      {/* <h1 style={{ margin: 0 }} className="logo"> */}
      <Link to="/" className="logo-link">
        {/* <img src={logo} alt="Personal Gatsby Logo" /> */}
        <img src={cursive} alt="Personal Gatsby Cursive" />
      </Link>
      {/* </h1> */}

      <ul className="nav">
        <li>
          <Link
            className={location.pathname === '/about' ? 'active' : 'inactive'}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/contact' ? 'active' : 'inactive'}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/portfolio' ? 'active' : 'inactive'
            }
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={location.pathname === '/blog' ? 'active' : 'inactive'}
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
