import React from 'react'
import styled from 'styled-components'
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share'

const NavWrapper = styled.nav``

/**
 * A navigation bar with sharing icons for an article.
 *
 * @param props
 */
const BlogShareNav = props => (
  <NavWrapper aria-label="Share article icons">
    <ul>
      <li aria-label="Twitter">
        <TwitterShareButton
          className="button"
          url={props.blogUrl}
          title={props.title}
          via={props.via}
          hashtags={[props.hashtags]}
        >
          <TwitterIcon size={props.iconSize} round={props.iconRound} />
        </TwitterShareButton>
      </li>
      <li aria-label="Facebook">
        <FacebookShareButton
          className="button"
          url={props.blogUrl}
          quote={props.excerpt}
          hashtag={props.hashtag}
        >
          <FacebookIcon size={props.iconSize} round={props.iconRound} />
        </FacebookShareButton>
      </li>
      <li aria-label="LinkedIn">
        <LinkedinShareButton
          className="button"
          url={props.blogUrl}
          title={props.title}
          description={`${props.excerpt} (source: ${props.blogUrl})`}
        >
          <LinkedinIcon size={props.iconSize} round={props.iconRound} />
        </LinkedinShareButton>
      </li>
      <li aria-label="WhatsApp">
        <WhatsappShareButton
          className="button"
          url={props.blogUrl}
          title={props.title}
          separator={' | '}
        >
          <WhatsappIcon size={props.iconSize} round={props.iconRound} />
        </WhatsappShareButton>
      </li>
      {/* <li>
                  <RedditShareButton
                    className="button"
                    url={blogUrl}
                    title={frontmatter.title}
                  >
                    <RedditIcon size={iconSize} round={iconRound} />
                  </RedditShareButton>
                </li> */}
      {/* <li>
                  <TumblrShareButton
                    className="button"
                    url={blogUrl}
                    title={frontmatter.title}
                    tags={[frontmatter.tags]}
                    caption={`${excerpt} (source: ${blogUrl})`}
                  >
                    <TumblrIcon size={iconSize} round={iconRound} />
                  </TumblrShareButton>
                </li> */}
      {/* <li>
                  <EmailShareButton
                    className="button"
                    url={blogUrl}
                    subject={frontmatter.title}
                    body={`${excerpt} (source: ${blogUrl})`}
                  >
                    <EmailIcon size={iconSize} round={iconRound} />
                  </EmailShareButton>
                </li> */}
    </ul>
  </NavWrapper>
)

export default BlogShareNav
