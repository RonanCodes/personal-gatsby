// This is currently not in use, but may be in the future.

import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;

  box-shadow: 0.5px 2px 10px rgba(25, 17, 34, 0.3);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-decoration: none;
    color: #4c2fc9;
  }
`

// Move into another file perhaps?
const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            category
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <ArchiveList>
            <h3>Archive</h3>

            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.frontmatter.slug}>
                <Link
                  to={`/${edge.node.frontmatter.category}/${
                    edge.node.frontmatter.slug
                  }`}
                >
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
)

export default Archive
