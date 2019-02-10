import React from 'react'
import Layout from '../components/layout'
import PortfolioListing from '../components/portfolioListing'
import SEO from '../components/seo'
import { ListingMain } from '../styled-components'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Portfolio Items" />
    <ListingMain>
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        <PortfolioListing />
      </div>
    </ListingMain>
  </Layout>
)

export default PortfolioPage
