import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

// import Image from '../components/image'
// import SEO from '../components/seo'

const LISTING_QUERY = graphql`
  query PortfolioItemListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            category
          }
        }
      }
    }
  }
`

const PortfolioItem = styled.article`
  box-shadow: 0.5px 2px 10px rgba(25, 17, 34, 0.3);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-size: 0.8rem;
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
`

const PortfolioListing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(({ node }) => (
            <PortfolioItem key={node.frontmatter.slug}>
              <header>
                <Link
                  to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
                >
                  <h2>{node.frontmatter.title}</h2>
                </Link>
                <h5>{node.frontmatter.date}</h5>
              </header>
              <p>{node.excerpt}</p>
              <Link
                className="read-more"
                to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
              >
                Read More
              </Link>
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
