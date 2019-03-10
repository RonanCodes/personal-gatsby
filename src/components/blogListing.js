import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { extractLastStringInPath } from '../helpers'
import { Color } from '../constants'

const BLOG_LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
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
            coverImage
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

  .articleBody {
    padding: 1rem;

    h2 {
      margin-bottom: 0;
    }

    h5,
    h6 {
      color: ${Color.GREY_REGULAR};
    }

    a {
      text-decoration: none;
      color: ${Color.TEXT_BLACK};
    }

    p {
      font-size: 18px;
    }
  }

  .cover-image {
    width: 100%;
    overflow-y: hidden;
    max-height: 200px;
    text-align: center;
  }
`

const SubHeading = styled.h6`
  color: ${Color.GREY_REGULAR};

  margin-top: 3px;

  .left-side {
    margin-right: 10px;
  }

  .right-side {
    margin-left: 10px;
  }
`

/**
 * A list of clickable blog posts.
 */
const BlogListing = () => (
  <StaticQuery
    query={BLOG_LISTING_QUERY}
    render={({ allMarkdownRemark }) => {
      return !allMarkdownRemark
        ? null
        : allMarkdownRemark.edges.map(({ node }) => (
            <Post role="article" key={node.frontmatter.slug}>
              {!node.frontmatter.coverImage ? null : (
                <Link
                  to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
                >
                  <div className="cover-image">
                    <img
                      src={node.frontmatter.coverImage}
                      alt={extractLastStringInPath(node.frontmatter.coverImage)}
                    />
                  </div>
                </Link>
              )}
              <div className="articleBody">
                <header aria-label="Blog header">
                  <Link
                    to={`/${node.frontmatter.category}/${
                      node.frontmatter.slug
                    }`}
                  >
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <SubHeading>
                    <time className="left-side">{node.frontmatter.date}</time>•
                    <span className="right-side">{node.timeToRead}</span> min
                  </SubHeading>
                </header>
                <p>{node.excerpt}</p>
              </div>
            </Post>
          ))
    }}
  />
)

export default BlogListing
