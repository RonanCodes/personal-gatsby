import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { getAltImageNameFromPath } from '../helpers'
import styled from 'styled-components'

const SubHeading = styled.h6`
  color: grey;
  /* font-size: 15px; */

  margin-bottom: 0px;

  .left-side {
    margin-right: 10px;
  }

  .right-side {
    margin-left: 10px;
  }
`

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
          /* margin-bottom: -10px; */
          width: 100%;
        }
      }

      /* .content {
        padding-top: ${
          !this.props.data ||
          !this.props.data.markdownRemark.frontmatter.cover_image
            ? '0px'
            : ' 400px;'
        };
      } */

      .header {
        /* margin-top: 600px; */
        /* margin-bottom: 80px; */
        background: #e2e2e2;
        padding: 10px 0 10px 0;
        border-radius: 0 0px 30px 30px;
        border: 10px solid #e2e2e2;
        margin-bottom: 20px;

        .blog-title {
          margin-bottom: 0px;
          /* float: left; */
        }
        .sub-heading {
          /* float: right; */
        }
      }
    `

    const { frontmatter, html, timeToRead } = this.props.data.markdownRemark
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO title={frontmatter.title} />
        <BlogPost>
          {!frontmatter.cover_image ? null : (
            <div className="cover-image">
              <img
                src={frontmatter.cover_image}
                alt={getAltImageNameFromPath(frontmatter.cover_image)}
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

            {/* <h5>{frontmatter.date}</h5> */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        </BlogPost>
      </Layout>
    )
  }
}

// this gets ran on load, and the data object added to this pages props object
export const query = graphql`
  query blogQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        slug
        cover_image
      }
    }
  }
`
