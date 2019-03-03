import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Color } from '../constants'
import { extractLastStringInPath } from '../helpers'
import { Hr } from '../styled-components'

const PORTFOLIO_LISTING_QUERY = graphql`
  query PortfolioItemListing {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___startDate] }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        next {
          id
        }
        node {
          excerpt
          frontmatter {
            title
            coverImage
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
            technologies
            goals
            projectLink
            gitLink
          }
        }
      }
    }
  }
`

const PortfolioItem = styled.article`
  border-radius: 4px;
  margin-bottom: 2rem;

  h1 {
    font-weight: 900;
  }

  h2 {
    color: ${Color.ACCENT_DARK};
    font-weight: 100;
    margin-bottom: 0;
  }

  h5 {
    color: ${Color.GREY_REGULAR};
  }

  p {
    font-size: 18px;
  }

  a,
  a :visited {
    text-decoration: none;
    color: ${Color.SECONDARY};

    strong {
      color: ${Color.ACCENT};

      font-weight: bold;
    }
  }

  .start-date {
    padding-right: 10px;
  }

  .end-date {
    margin-left: 10px;
  }
`

const header = frontmatter => {
  const Header = styled.header`
    h1 {
      margin-bottom: 5px;
    }
  `

  return (
    <Header>
      <h1>{frontmatter.title}</h1>
      <h5>
        <span className="start-date">{frontmatter.startDate}</span>-
        <span className="end-date">{frontmatter.endDate}</span>
      </h5>
    </Header>
  )
}

/**
 * A list of portfolio items.
 */
const PortfolioListing = () => (
  <StaticQuery
    query={PORTFOLIO_LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(edge => (
            <PortfolioItem key={edge.node.frontmatter.title}>
              <img
                src={edge.node.frontmatter.coverImage}
                alt={extractLastStringInPath(edge.node.frontmatter.coverImage)}
              />

              {header(edge.node.frontmatter)}

              <h2>Goals / Information</h2>
              <p>{edge.node.frontmatter.goals}</p>

              <h2>Technologies / Skills</h2>
              <p>{edge.node.frontmatter.technologies}</p>

              {!edge.node.frontmatter.projectLink ? null : (
                <h4>
                  <OutboundLink
                    href={edge.node.frontmatter.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Project</strong> out here
                  </OutboundLink>
                </h4>
              )}
              {!edge.node.frontmatter.gitLink ? null : (
                <h4>
                  <OutboundLink
                    href={edge.node.frontmatter.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Source Code</strong> out here
                  </OutboundLink>
                </h4>
              )}

              {!edge.next || !edge.next.id ? null : <Hr />}
            </PortfolioItem>
          ))
    }
  />
)

export default PortfolioListing
