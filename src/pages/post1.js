import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Post1 = () => (
  <StaticQuery
    query={graphql`
      query PostOneQuery {
        markdownRemark(id: { eq: "64700be0-9eb0-5af8-bc2c-ed1973449cc4" }) {
          html
          excerpt
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {data.markdownRemark.excerpt}
        </div>
      </>
    )}
  />
)

export default Post1
