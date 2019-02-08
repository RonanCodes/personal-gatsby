import React from 'react'
import Layout from '../components/layout'
import Listing from '../components/listing'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <Listing />
    </div>
  </Layout>
)

export default PortfolioPage
