import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { ListingSection } from '../styled-components'

import PortfolioListing from '../components/portfolioListing'

/**
 * The Portfolio page.
 */
const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Portfolio Items" keywords={[`portfolio`]} />
    <ListingSection role="region" aria-label="My portfolio items.">
      <div
        style={{
          paddingTop: '30px',
        }}
      >
        <PortfolioListing />
      </div>
    </ListingSection>
  </Layout>
)

export default PortfolioPage
