import React from 'react'
import Layout from '../components/layout'
import BlogListing from '../components/blogListing'
import SEO from '../components/seo'

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Blog Posts" />
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
