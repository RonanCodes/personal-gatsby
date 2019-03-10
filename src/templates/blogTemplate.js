import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { extractLastStringInPath } from '../helpers'
import { ListingSection } from '../styled-components'
import { Color } from '../constants'

import BlogShareNav from '../components/blogShareNav'

/**
 * This gets ran on load, and the data object added to this pages props object.
 */
export const BLOG_POST_QUERY = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        slug
        coverImage
        discussionId
        tags
      }
    }
    site {
      siteMetadata {
        title
        twitterHandle
        siteUrl
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

const BlogPost = styled.div`
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

  header {
    background: #e2e2e2;
    padding: 0px 0 10px 0;
    border-radius: 0 0px 30px 30px;
    border: 10px solid #e2e2e2;
    margin-bottom: 20px;

    #blog-title {
      margin-bottom: 0px;
    }
  }
`

const BlogFooter = styled.footer`
  nav {
    ul {
      list-style: none;
      margin: 60px 0px 0px 0px;
      display: flex;

      li {
        padding-right: 20px;
        margin-bottom: 20px;

        div {
          cursor: pointer;
        }
      }
    }
  }
  .talkyard-comments p {
    display: none;
  }
`

/**
 * The template for each individual blog post.
 */
export default class blogTemplate extends Component {
  render() {
    const {
      frontmatter,
      html,
      timeToRead,
      excerpt,
    } = this.props.data.markdownRemark
    const { siteMetadata } = this.props.data.site
    const { location } = this.props
    const blogUrl = `${siteMetadata.siteUrl}/blog/${frontmatter.slug}`

    return (
      <Layout location={location}>
        <SEO title={frontmatter.title} keywords={[`blog`, `post`, `article`]} />
        <ListingSection role="region" aria-labelledby="blog-title">
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
              <header aria-labelledby="blog-title">
                <h1 id="blog-title">{frontmatter.title}</h1>
                <SubHeading className="sub-heading">
                  <time className="left-side">{frontmatter.date}</time>•
                  <span className="right-side">{timeToRead}</span> min
                </SubHeading>
              </header>

              <div dangerouslySetInnerHTML={{ __html: html }} />
            </section>
          </BlogPost>

          <BlogFooter aria-label="Blog footer">
            <BlogShareNav
              iconSize={32}
              iconRound={true}
              title={frontmatter.title}
              excerpt={excerpt}
              blogUrl={blogUrl}
              via={siteMetadata.twitterHandle}
              hashtags={frontmatter.tags}
              hashtag={`#${frontmatter.tags.split(',')[0]}`}
            />
            <TalkyardCommentsIframe discussionId={frontmatter.discussionId} />
          </BlogFooter>
        </ListingSection>
      </Layout>
    )
  }
}
