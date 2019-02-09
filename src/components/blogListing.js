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
      filter: { frontmatter: { category: { eq: "blog" } } }
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
    site {
      siteMetadata {
        mediumHandle
        devHandle
      }
    }
  }
`

const Post = styled.article`
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

const BlogSiteSection = styled.section`
  width: 100%;
  background: #eaeaea;
  color: #9056d4;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 18px;

  a,
  a :visited {
    text-decoration: none;
    color: #4c2fc9;
  }
`

const BlogListing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark, site }) => {
      return (
        <>
          <BlogSiteSection>
            For more articles check out:{` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://dev.to/${site.siteMetadata.devHandle}`}
            >
              Dev
            </a>
            {`    &    `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://medium.com/@${site.siteMetadata.mediumHandle}`}
            >
              Medium
            </a>
          </BlogSiteSection>
          {!allMarkdownRemark
            ? null
            : allMarkdownRemark.edges.map(({ node }) => (
                <Post key={node.frontmatter.slug}>
                  <header>
                    <Link
                      to={`/${node.frontmatter.category}/${
                        node.frontmatter.slug
                      }`}
                    >
                      <h2>{node.frontmatter.title}</h2>
                    </Link>
                    <h5>{node.frontmatter.date}</h5>
                  </header>
                  <p>{node.excerpt}</p>
                  <Link
                    className="read-more"
                    to={`/${node.frontmatter.category}/${
                      node.frontmatter.slug
                    }`}
                  >
                    Read More
                  </Link>
                </Post>
              ))}
        </>
      )
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
