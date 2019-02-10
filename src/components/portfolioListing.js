import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { getAltImageNameFromPath } from '../helpers'

const LISTING_QUERY = graphql`
  query PortfolioItemListing {
    allMarkdownRemark(
      # limit: 10
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
  /* max-width: 920px;
  margin: auto; */

  /* box-shadow: 0.5px 2px 10px rgba(25, 17, 34, 0.3); */
  /* padding: 1rem; */
  border-radius: 4px;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-size: 18px;
  }

  h2 {
    margin-bottom: 0;
  }

  h5 {
    color: grey;
  }

  .read-more {
    font-family: 'Open Sans', 'Droid Sans', serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #9056d4;
  }

  .start-date {
    padding-right: 10px;
  }

  .end-date {
    margin-left: 10px;
  }

  hr {
    margin: 75px 0 50px 0;
    /* margin-top: 50px; */
    /* margin-bottom: 50px; */
    /* background: yellow; */
    background: #aeafe8;
    height: 1.5px;
  }

  a,
  a :visited {
    color: #aeafe8;

    strong {
      color: #9056d4;
      font-weight: bold;
    }
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    color: #2a2a57;
    font-weight: 100;
  }
`

const CoverImage = styled.img`
  /* max-height: 400px; */
  /* overflow: hidden; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  /* max-width: 200px */
`

const Header = styled.header`
  h1 {
    margin-bottom: 5px;
  }
`

const header = frontmatter => {
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

const PortfolioListing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(edge => (
            <PortfolioItem key={edge.node.frontmatter.title}>
              <CoverImage
                src={edge.node.frontmatter.coverImage}
                alt={getAltImageNameFromPath(edge.node.frontmatter.coverImage)}
              />

              {header(edge.node.frontmatter)}

              <h2>Goals</h2>
              <p>{edge.node.frontmatter.goals}</p>

              <h2>Technologies</h2>
              <p>{edge.node.frontmatter.technologies}</p>

              {!edge.node.frontmatter.projectLink ? null : (
                <h4>
                  <a
                    href={edge.node.frontmatter.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Project</strong> out here
                  </a>
                </h4>
              )}
              {!edge.node.frontmatter.gitLink ? null : (
                <h4>
                  <a
                    href={edge.node.frontmatter.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check the <strong>Source Code</strong> out here
                  </a>
                </h4>
              )}

              {!edge.next || !edge.next.id ? null : <hr />}
            </PortfolioItem>
          ))
    }
  />
  //   <div>
  //     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  //     <h1>Hi dudesters</h1>
  //     <p>Welcome to your new Gatsby site.</p>
  //     <p>Now go build something great.</p>
  //     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //       <Image />
  //     </div>
  //     <Link to="/page-2/">Go to page 2</Link>
  //   </div>
)

export default PortfolioListing
