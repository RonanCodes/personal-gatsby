import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
// import { graphql } from 'gatsby'

export default class Image extends Component {
  render() {
    const fluid = this.props.data.file.childImageSharp.fluid

    // const { frontmatter, html } = this.props.data.markdownRemark
    // const { location } = this.props

    return (
      // Img
      // <h1>IMAGE</h1>
      <Img
        fluid={fluid}
        style={{
          width: '500px',
          margin: 'auto',
        }}
      />
      // <Layout location={location}>
      //   <h1>{frontmatter.title}</h1>
      //   {/* <h5>{frontmatter.date}</h5> */}
      //   <div dangerouslySetInnerHTML={{ __html: html }} />
      // </Layout>
    )
  }
}

// this gets ran on load, and the data object added to this pages props object
export const query = graphql`
  query imageQuery($imageName: String!) {
    file(relativePath: { eq: $imageName }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

// query imageQuery($imageName: String!) {
//   markdownRemark(frontmatter: { slug: { eq: $imageName } }) {
//     html
//     frontmatter {
//       title
//       date
//       slug
//     }
//   }
// }
