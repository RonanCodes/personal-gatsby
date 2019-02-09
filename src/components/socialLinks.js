import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const SocialLinksList = styled.ul`
  list-style: none;
  margin: 40px 10px 40px 10px;
  display: flex;
  justify-content: space-between;

  max-width: 300px;
  li {
    padding: 0 20px 0 20px;

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
            <a href="https://twitter.com/_RonanC">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ronanconnolly/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://github.com/ronanc">
              <FaGithub />
            </a>
          </li>
        </SocialLinksList>
      </>
    )
  }
}

export default SocialLinks
