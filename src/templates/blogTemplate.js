import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { extractLastStringInPath } from '../helpers'
import { ListingSection } from '../styled-components'
import { Color } from '../constants'
/**
 * This gets ran on load, and the data object added to this pages props object.
 */
export const BLOG_POST_QUERY = graphql`
  query BlogPostQuery($slug: String!) {
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

const SubHeading = styled.h6`
  color: ${Color.GREY_REGULAR};
  margin-bottom: 0px;
  margin-top: 4px;

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

        text-align: center;
        img {
          margin-bottom: -10px;
          max-width: 100%;
        }
      }

      .header {
        background: #e2e2e2;
        padding: 0px 0 10px 0;
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
        <SEO title={frontmatter.title} keywords={[`blog`, `post`, `article`]} />
        <ListingSection>
          <BlogPost>
            {!frontmatter.coverImage ? null : (
              <div className="cover-image">
                <img
                  src={frontmatter.coverImage}
                  alt={extractLastStringInPath(frontmatter.coverImage)}
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
        </ListingSection>
      </Layout>
    )
  }
}
