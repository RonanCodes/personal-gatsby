import React from 'react'
import Layout from '../components/layout'
import BlogListing from '../components/blogListing'

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <div
      style={{
        paddingTop: '30px',
      }}
    >
      <BlogListing />
    </div>
  </Layout>
)

export default BlogPage
