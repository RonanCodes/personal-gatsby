import React from 'react'
import Layout from '../components/layout'
import BlogListing from '../components/blogListing'

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <BlogListing />
  </Layout>
)

export default BlogPage
