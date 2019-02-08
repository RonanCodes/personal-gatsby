import React from 'react'
import Layout from '../components/layout'
import PortfolioListing from '../components/portfolioListing'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <PortfolioListing />
  </Layout>
)

export default PortfolioPage
