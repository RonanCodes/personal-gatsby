import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaGlobeAmericas,
  FaEnvelope,
} from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const SOCIAL_DATA_QUERY = graphql`
  query SocialDataQuery {
    site {
      siteMetadata {
        twitterHandle
        linkedInHandle
        githubHandle
        email
        mapLink
      }
    }
  }
`

const SocialLinksList = styled.ul`
  list-style: none;
  margin: 60px 10px 0px 0px;
  display: flex;
  justify-content: space-between;

  max-width: 300px;
  li {
    a {
      font-size: 25px;
      color: #4c2fc9;
    }
  }
`

/**
 * A horizontal list of social, email, and map links.
 */
class SocialLinks extends React.Component {
  render() {
    return (
      <StaticQuery
        query={SOCIAL_DATA_QUERY}
        render={data => (
          <SocialLinksList>
            <li>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${
                  data.site.siteMetadata.twitterHandle
                }`}
              >
                <FaTwitter />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.linkedin.com/in/${
                  data.site.siteMetadata.linkedInHandle
                }/`}
              >
                <FaLinkedinIn />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/${
                  data.site.siteMetadata.githubHandle
                }`}
              >
                <FaGithub />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noopener noreferrer"
                href={data.site.siteMetadata.mapLink}
              >
                <FaGlobeAmericas />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink href={`mailto:${data.site.siteMetadata.email}`}>
                <FaEnvelope />
              </OutboundLink>
            </li>
          </SocialLinksList>
        )}
      />
    )
  }
}

export default SocialLinks
