import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

// import logo from '../images/personal-gatsby-logo.png'
import cursive from '../images/personal-gatsby-cursive.png'

// const HeaderWrapper = styled.div`
//   background: #aeafe8;
//   /* margin-bottom: 1.45rem; */

//   /* margin: 10px 10px 0 10px; */
//   padding: 20px 20px 0 20px;

//   img {
//     margin-bottom: 0;
//   }
// `

const HeaderContainer = styled.div`
  @media (min-width: 790px) {
    flex-direction: row;
  }

  background: #aeafe8;

  img {
    margin-bottom: 0;
  }

  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* puts space between items */
  justify-content: space-between;

  /* seem to not do anything */
  overflow: hidden;
  margin-bottom: 0;

  /* margin: 10px 20px 0px 20px; */

  /* margin: 0 auto; */ /* max-width: 960px; */
  /* padding: 0.3rem; */ /* margin-left: 20px; */ /* display: inline-block; */
  /* a {
    padding: 0px !important;
    margin: 0px !important;
  } */
  .logo-link {
    /* float: left; */
    /* height: 100px; */

    img {
      /* logo */
      /* height: 100px; */
      /* cursive */
      /* height: 80px; */
      /* overflow: hidden; */
      /* width: 200px; */
      padding-top: 20px;
    }

    /* margin-bottom: 20px; */
  }

  .nav {
    /* background: yellow; */
    /* float: right; */
    /* margin-top: 30px; */

    /* font-size: 0.9em; */
    /* height: 100%; */
    display: flex;
    list-style: none;

    /* background: yellow; */

    /* margin: 5px 0 20px 0; */
    margin: 0;

    /* justify-content: space-between; */

    li {
      padding: 0 15px 0 15px;
      /* display: inline; */

      /* margin-left: 20px;
      margin-right: 20px; */

      /* margin: 40px; */
      /* font-family: 'Open Sans'; */
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      a {
        color: #8a4cd3;
        text-decoration: none;

        :visited {
          color: #8a4cd3;
          text-decoration: none;
        }

        &.active {
          /* color: #dd0244; */
          color: #2a2a57;

          text-decoration: underline;
        }
      }
    }
  }
`

const Header = ({ siteTitle, location }) => (
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
