import React from 'react'
import Layout from '../components/layout'
import PortfolioListing from '../components/portfolioListing'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <div
      style={{
        paddingTop: '30px',
      }}
    >
      <PortfolioListing />
    </div>
  </Layout>
)

export default PortfolioPage
