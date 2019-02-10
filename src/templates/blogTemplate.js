import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { getAltImageNameFromPath } from '../helpers'
import { ListingMain } from '../styled-components'

const SubHeading = styled.h6`
  color: grey;
  margin-bottom: 0px;

  .left-side {
    margin-right: 10px;
  }

  .right-side {
    margin-left: 10px;
  }
`

/**
 * The template for each individual blog post.
 */
export default class blogTemplate extends Component {
  render() {
    const BlogPost = styled.article`
      /* margin top of 10 is for all layout pages */
      margin-top: -10px;

      .cover-image {
        overflow: hidden;
        max-height: 400px;
        img {
          margin-bottom: -10px;
          width: 100%;
        }
      }

      .header {
        background: #e2e2e2;
        padding: 10px 0 10px 0;
        border-radius: 0 0px 30px 30px;
        border: 10px solid #e2e2e2;
        margin-bottom: 20px;

        .blog-title {
          margin-bottom: 0px;
        }
      }
    `

    const { frontmatter, html, timeToRead } = this.props.data.markdownRemark
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO title={frontmatter.title} />
        <ListingMain>
          <BlogPost>
            {!frontmatter.coverImage ? null : (
              <div className="cover-image">
                <img
                  src={frontmatter.coverImage}
                  alt={getAltImageNameFromPath(frontmatter.coverImage)}
                />
              </div>
            )}
            <section className="content">
              <section className="header">
                <h1 className="blog-title">{frontmatter.title}</h1>
                <SubHeading className="sub-heading">
                  <span className="left-side">{frontmatter.date}</span>•
                  <span className="right-side">{timeToRead}</span> min
                </SubHeading>
              </section>

              <div dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          </BlogPost>
        </ListingMain>
      </Layout>
    )
  }
}

/**
 * This gets ran on load, and the data object added to this pages props object.
 */
export const query = graphql`
  query blogQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        slug
        coverImage
      }
    }
  }
`
