import React from 'react'
import Layout from '../components/layout'
import Listing from '../components/listing'

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <Listing />
    </div>
  </Layout>
)

export default BlogPage
