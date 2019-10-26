import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Color } from '../constants'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ABOUT_IMAGE_QUERY = graphql`
  query AboutImageQuery {
    file(relativePath: { regex: "/walk_in_the_city/" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const AboutYearSection = styled.section`
  margin-top: 50px;
  padding-bottom: 10px;

  p {
    clear: both;
  }

  .year-heading {
    display: block;

    h1 {
      color: ${Color.TEXT_DARK};
      float: left;
    }

    hr {
      background: ${Color.SECONDARY};
      height: 2px;

      width: 20%;
      float: left;

      margin-top: 24px;
      margin-left: 1%;
    }
  }
`

const aboutYear = (year, content) => (
  <AboutYearSection role="region" aria-label={year}>
    <div className="year-heading">
      <h1>{year}</h1>
      <hr />
    </div>
    <p>{content}</p>
  </AboutYearSection>
)

/**
 * The About Us page.
 */
const AboutPage = ({ location }) => (
  <StaticQuery
    query={ABOUT_IMAGE_QUERY}
    render={data => (
      <Layout location={location}>
        <SEO title="About Me" keywords={[`about`]} />

        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            maxWidth: '500px',
            margin: 'auto',
          }}
          alt={'A man strolling through a city listening to music.'}
        />
        {/* <p>My life's work is software engineering &amp; outdoor pursuits.</p> */}

        <p>
          From a very young age I've had a keen interest in technology,
          business, finance/investing, and the outdoors.
          <br />
          {/* The West of Ireland is where I was born and raised.  */}I
          currently reside in Galway City on the west coast of Ireland.
        </p>
        <p>
          I believe in doing whatever you want as long as it doesn't hurt anyone
          else <br /> (a motto I learned from the amazing writer{' '}
          <OutboundLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://rebeccaspelman.com"
          >
            Rebecca Spelman
          </OutboundLink>
          ).
          <br />
        </p>

        {/* <p
          style={{
            marginTop: '35px',
            marginBottom: '35px',
          }}
        >
          <h3>Some major life goals of mine are:</h3>
          <ul>
            <li>
              <span role="img" aria-label="money-bag">
                👨‍💻
              </span>{' '}
              Become a leader in the front-end software engineering community
              (creating software &amp; blogging primarily)
            </li>
            <li>
              <span role="img" aria-label="money-bag">
                🌍{' '}
              </span>
              Become a digital nomad (work while slow travelling)
            </li>
            <li>
              <span role="img" aria-label="money-bag">
                💼{' '}
              </span>
              Start my own business (leveraging modern technologies)
            </li>
            <li>
              <span role="img" aria-label="money-bag">
                💰{' '}
              </span>
              Achieve the FIRE life (financially independent &amp; retired
              early)
            </li>
            <li>
              <span role="img" aria-label="money-bag">
                🧗‍{' '}
              </span>
              Pursue outdoor pursuits such as trekking, kayaking, &amp;
              bouldering
            </li>
            <li>
              <span role="img" aria-label="money-bag">
                🐶{' '}
              </span>
              Get a dog
            </li>
          </ul>
        </p> */}

        <p
          style={{
            marginBottom: '70px',
          }}
        >
          In my spare time I enjoy reading, gaming, board-games, trekking,
          learning, and spending time with my partner. <br /> I'm a coffee
          connoisseur, and really enjoy unwinding in a relaxed environment.
        </p>

        {/* {aboutYear(
          2019,
          `The goals I outlined for 2019 are as follows:
📚 Learn UI Design, CSS, React, GatsbyJS;
🖌 Redesign my website;
✏️ Start a front-end blog;
2019 is my year for learning & taking action! 🔥
          `
        )}

        {aboutYear(
          2018,
          `In September of 2018 I joined Fidelity Investments as a Senior Software Engineer (Contractor).
          This was a step up from my previous role. I had a few weeks off before starting.
          During this time I researched vanilla JS at a deep level, upgraded my software architecture skills, and learned the Angular framework.
          This paid dividends as I quickly became comfortable in my new role.

          Upon joining Fidelity I noticed how well they invest in their people, buildings, and technology.
          I was put to work on implementing features for an investment (Asset Management Equity Trading) web application using the Angular framework.

          This role at Fidelity was exactly what I was looking for, and I was over the moon to get a role in the finance industry as this has always been a goal of mine.
          `
        )}

        {aboutYear(
          2017,
          `In November of 2017 I joined the IBM Resilient team.
        Resilient was a recent startup that IBM had acquired, most of the team were based in Boston, USA.
        This was a really interesting role as I got to see how IBM handled merging a high performing startup into the corporate structure of the main company body.

        In this role I trained up the QA on the Galway side on test automation (selenium & groovy) so that they could write up the tests (most of the QA had never done any programming).
        I got to take my hand to the back-end and write up some features with Java & BASH.
        One feature in particular that I spent a lot of time on was audit logging (utilising Splunk).

        I joined the Sports & Social committee this year, which was incredibly fun and unwittingly a lot of hard work.
        I really enjoyed this as I got to organise events for all the amazing people at the IBM Galway office.
        `
        )}

        {aboutYear(
          2016,
          `In May of 2016 I joined the IBM Security division as a Front-End software engineer.
          I was ecstatic, as I'd always wanted to work as a software engineer for a big multi-national.
          IBM in particular stood out to me as it's such an historic company.

          Here I worked on creating features for a security web application (EDR) which helped monitor malware attacks against endpoints.
          I was mainly working with AngularJS & Node.js.
          IBM is where I really found my feet in terms of Agile ceremonies, working in remote global co-located teams, and seeing how a multi-national works (the pros and cons).
          I really enjoyed learning the security domain. I learned all about the ins and outs of malware and just how fragile the whole worlds infrastructure is due to this malware.`
        )}

        {aboutYear(
          2015,
          `I received a second contract with Enterprise Ireland, which involved creating a cross platform mobile application
          that would allow realtors to view real-estate information in real time,
          and allow the company to utilize push notifications to let their clients know quickly about deals.

          I finished up two contracts for Enterprise Ireland this year (food & realtor apps).
          I used the Ionic framework with AngularJS in order to create these applications, and published them to the iOS & Android stores.

          I was in charge of the UI design, mobile development, and most of the customer interactions for both projects.`
        )}

        {aboutYear(
          2014,
          `A colleague reached out and asked if I was interested in a contract from Enterprise Ireland,
          I agreed and took it on. It involved creating a cross platform mobile food ordering application,
          which would allows customers to order food, drinks, and custom sandwiches from their phone.
          This involved a top up system with top up codes so that you could pay via the app.

          I used the Ionic framework with AngularJS in order to create this application.`
        )} */}
      </Layout>
    )}
  />
)

export default AboutPage
