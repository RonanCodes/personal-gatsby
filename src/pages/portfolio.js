import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ListingMain } from '../styled-components'

import PortfolioListing from '../components/portfolioListing'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <SEO
      title="Portfolio Items"
      keywords={[
        `portfolio items`,
        `portfolio`,
        `items`,
        `projects`,
        `project`,
        `work`,
      ]}
    />
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
