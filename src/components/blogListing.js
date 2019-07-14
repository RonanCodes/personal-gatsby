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
    max-height: 230px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
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
            <Post
              role="article"
              key={node.frontmatter.slug}
              aria-label={node.frontmatter.title}
            >
              <Link
                to={`/${node.frontmatter.category}/${node.frontmatter.slug}`}
              >
                {!node.frontmatter.coverImage ? null : (
                  <div className="cover-image">
                    <img
                      src={node.frontmatter.coverImage}
                      alt={extractLastStringInPath(node.frontmatter.coverImage)}
                    />
                  </div>
                )}
                <div className="articleBody">
                  <header aria-label={node.frontmatter.title}>
                    <h2>{node.frontmatter.title}</h2>
                    <SubHeading>
                      <time
                        className="left-side"
                        aria-label="Article publish date"
                      >
                        {node.frontmatter.date}
                      </time>
                      •
                      <span
                        className="right-side"
                        aria-label="Time to read article"
                      >
                        {node.timeToRead} min
                      </span>
                    </SubHeading>
                  </header>
                  <p aria-label="Article excerpt">{node.excerpt}</p>
                </div>
              </Link>
            </Post>
          ))
    }}
  />
)

export default BlogListing
