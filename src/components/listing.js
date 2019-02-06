import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

// import Image from '../components/image'
// import SEO from '../components/seo'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

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
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <header>
            <Link to={`/posts${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <h5>{node.frontmatter.date}</h5>
          </header>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${node.frontmatter.slug}`}>
            Read More
          </Link>
        </Post>
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

export default Listing
