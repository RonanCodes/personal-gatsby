import styled from 'styled-components'
import { Color } from './constants'

/**
 * Contains all the shared styled components.
 */

export const ListingSection = styled.section`
  max-width: 920px;
  margin: auto;
`

export const Hr = styled.hr`
  margin: 75px 0 50px 0;
  background: ${Color.SECONDARY};
  height: 1.5px;
`
