import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import { useSpring, animated } from 'react-spring'

export default class postLayout extends Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark
    const { location } = this.props

    // useSpring({ height: 200, from: { height: 100 } })

    return (
      <Layout location={location}>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

// this gets ran on load, and the data object added to this pages props object
export const query = graphql`
  query PostQuery($slug: String!) {
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
