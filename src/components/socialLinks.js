import React from 'react'
import styled from 'styled-components'
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaGlobeAmericas,
  FaEnvelope,
} from 'react-icons/fa'

const SocialLinksList = styled.ul`
  list-style: none;
  margin: 60px 10px 40px 0px;
  display: flex;
  justify-content: space-between;

  max-width: 300px;
  li {
    padding: 0 40px 0 0;

    a {
      font-size: 30px;
    }
  }
`

class SocialLinks extends React.Component {
  render() {
    return (
      <>
        {/* <h2>Social Links:</h2> */}
        <SocialLinksList>
          <li>
            <a target="_blank" href="https://twitter.com/_RonanC">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ronanconnolly/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/ronanc">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.google.ie/maps/place/Galway/@53.2839064,-9.0837657,13z/data=!3m1!4b1!4m5!3m4!1s0x485b93955a2d5bff:0x32b1b440a495281!8m2!3d53.270668!4d-9.0567905"
            >
              <FaGlobeAmericas />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:hi@ronanconnolly.ie">
              <FaEnvelope />
            </a>
          </li>
        </SocialLinksList>
      </>
    )
  }
}

export default SocialLinks
