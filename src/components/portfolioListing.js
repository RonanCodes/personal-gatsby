import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Color } from '../constants'
import { extractLastStringInPath, slugify } from '../helpers'
import { Hr } from '../styled-components'

const PORTFOLIO_LISTING_QUERY = graphql`
  query PortfolioItemListing {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___endDate] }
      filter: { frontmatter: { category: { in: ["portfolio", "certificate"] } } }
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
            technologiesandskills
            goal
            whatidid
            projectLink
            gitLink
            moreLink
            certLink
            category
          }
        }
      }
    }
  }
`
// # skills
// # problem
// # client
// # result
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
    <Header aria-label="Portfolio header">
      <h1>{frontmatter.category === 'certificate' ? 'Certificate: ' : ''}{frontmatter.title}</h1>
      <h5>
        <span className="start-date">{frontmatter.startDate}</span>-
        <span className="end-date">
          {frontmatter.endDate === 'Jan 9000'
            ? 'Current' :  frontmatter.startDate === frontmatter.endDate 
            ? 'No End Date' : frontmatter.endDate}
        </span>
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
            <PortfolioItem
              role="article"
              key={edge.node.frontmatter.title}
              aria-label={edge.node.frontmatter.title}
              id={slugify(edge.node.frontmatter.title)}
            >
              {header(edge.node.frontmatter)}
              <img
                src={edge.node.frontmatter.coverImage}
                alt={extractLastStringInPath(edge.node.frontmatter.coverImage)}
              />
              <h2>Technologies / Skills</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: edge.node.frontmatter.technologiesandskills,
                }}
              />

            {!edge.node.frontmatter.goal ? null : (
              <div>
                <h2>Goals</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: edge.node.frontmatter.goal,
                  }}
                />
            </div>
            )}

              {!edge.node.frontmatter.whatidid ? null : (
                <div>
                  <h2>
                    What
                    {edge.node.frontmatter.endDate === 'Jan 9000'
                      ? "'s "
                      : ' was '}
                      Involved
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: edge.node.frontmatter.whatidid,
                    }}
                  />
                </div>
              )}

              {!edge.node.frontmatter.certifier ? null : (
                <div>
                  <h2>
                    Certifier
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: edge.node.frontmatter.certifier,
                    }}
                  />
                </div>
              )}    

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
              {!edge.node.frontmatter.certLink ? null : (
                <h4>
                  <OutboundLink
                    href={edge.node.frontmatter.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  Certificate Link
                  </OutboundLink>
                </h4>
              )}
              {!edge.node.frontmatter.moreLink ? null : (
                <h4>
                  <OutboundLink
                    href={edge.node.frontmatter.moreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {edge.node.frontmatter.category === 'certificate'
                      ? 'Certifier Website'
                      : `Check <strong>More</strong> out here`}

                    
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
