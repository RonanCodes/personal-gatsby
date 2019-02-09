import React from 'react'
import Layout from '../components/layout'
import PortfolioListing from '../components/portfolioListing'
import SEO from '../components/seo'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Portfolio Items" />

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
