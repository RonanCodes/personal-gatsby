import React from 'react'
import styled from 'styled-components'
import { FaGlobeAmericas, FaEnvelope } from 'react-icons/fa'

const ContactLinksList = styled.ul`
  list-style: none;
  margin: 40px 10px 40px 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  /* align-items: center; */
  /* text-align: center; */
  margin: auto;

  /* background: yellow; */

  max-width: 300px;
  li {
    padding: 0 20px 0 20px;

    a {
      font-size: 30px;
    }
  }
`

class ContactLinks extends React.Component {
  render() {
    return (
      <>
        {/* <h2>Social Links:</h2> */}
        <ContactLinksList>
          <li>
            <a target="_blank" href="https://www.google.ie/maps/place/Galway/@53.2839064,-9.0837657,13z/data=!3m1!4b1!4m5!3m4!1s0x485b93955a2d5bff:0x32b1b440a495281!8m2!3d53.270668!4d-9.0567905">
              <FaGlobeAmericas />
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:hi@ronanconnolly.ie">
              <FaEnvelope />
            </a>
          </li>
        </ContactLinksList>
      </>
    )
  }
}

export default ContactLinks
