import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { getAltImageNameFromPath } from '../helpers'
// import Image from '../components/image'
// import SEO from '../components/seo'

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            slug
            category
            cover_image
          }
        }
      }
    }
  }
`

const Post = styled.article`
  margin-top: -10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  border-radius: 5px;

  .content {
    /* box-shadow: 0.5px 2px 10px rgba(25, 17, 34, 0.3); */
    padding: 1rem;

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

    h5,
    h6 {
      color: grey;
    }

    .read-more {
      font-family: 'Open Sans', 'Droid Sans', serif;
      font-size: 0.8rem;
      text-decoration: underline;
      color: #9056d4;
    }
  }

  .cover-image {
    width: 100%;
    overflow-y: hidden;

    max-height: 200px;
    /* overflow: hidden; */

    img {
      margin-top: -12%;
      /* margin-top: -100px; */
      /* margin-bottom: 0; */
    }
  }
`

const SubHeading = styled.h6`
  color: grey;

  .left-side {
    margin-right: 10px;
  }

  .right-side {
    margin-left: 10px;
  }
`

const BlogListing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) => {
      return !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug}>
              {!node.frontmatter.cover_image ? null : (
                <Link
                  to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
                >
                  <div className="cover-image">
                    <img
                      src={node.frontmatter.cover_image}
                      alt={getAltImageNameFromPath(
                        node.frontmatter.cover_image
                      )}
                    />
                  </div>
                </Link>
              )}
              <div className="content">
                <header>
                  <Link
                    to={`/${node.frontmatter.category}/${
                      node.frontmatter.slug
                    }`}
                  >
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <SubHeading>
                    <span className="left-side">{node.frontmatter.date}</span>•
                    <span className="right-side">{node.timeToRead}</span> min
                  </SubHeading>
                </header>
                <p>{node.excerpt}</p>
                {/* <Link
                className="read-more"
                to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
              >
                Read More
              </Link> */}
              </div>
            </Post>
          ))
    }}
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

export default BlogListing
