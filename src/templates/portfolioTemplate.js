import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class portfolioTemplate extends Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark
    const { location } = this.props

    return (
      <Layout location={location}>
        <SEO title={frontmatter.title} />

        <h1>{frontmatter.title}</h1>
        {/* <h5>{frontmatter.date}</h5> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

// this gets ran on load, and the data object added to this pages props object
export const query = graphql`
  query portfolioQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
