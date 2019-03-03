import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

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

      margin-top: 20px;
      margin-left: 1%;
    }
  }
`

const aboutYear = (year, content) => (
  <AboutYearSection>
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
        />

        <p>
          From a very young age I've had a keen interest in technology, business
          and finance. Indeed my whole family is interested in these things, so
          I gained the interest through osmosis.
          <br />
          The West of Ireland is where I was born and raised. I now reside in
          Galway City on the west coast.
        </p>
        <p>
          I believe in doing whatever you want as long as it doesn't hurt anyone
          else (a motto I learned from the amazing writer{' '}
          <a href="http://rebeccaspelman.com">Rebecca Spelman</a>).
          <br />
          Some of my over arching goals in life are to become a leader in the
          Front-End development community, become a digital nomad (work while
          travelling), start my own business (leveraging modern technologies),
          and to become financially intelligent.
        </p>

        <p
          style={{
            marginBottom: '70px',
          }}
        >
          In my spare time I enjoy reading, playing board-games, trekking,
          jogging, and learning (technology, business, and finance mostly). I'm
          a coffee connoisseur and really enjoy unwinding in a relaxed
          environment when I get some down time.
        </p>

        {aboutYear(
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
          This was a huge jump from my previous role. I had a few weeks off before this role,
          I spent that time researching vanilla JS at a deep level, upgrading my software architecture skills, and on the Angular framework.
          This paid dividends and I quickly started knocking out features for my new role.
          I was put to work on implementing features for an Investment web application using the Angular framework.
          This role at Fidelity was exactly what I was looking for, and I was over the moon to get a role in the finance industry as this has always been a goal of mine.
          The building, people, and technologies being used at Fidelity are top quality.
          `
        )}

        {aboutYear(
          2017,
          `In November of 2017 I joined the IBM Resilient team.
        Resilient was a recent startup that IBM had acquired, most of the team were based in Boston, USA.
        This was a really interesting role as I got to see how IBM handled turning a high performing startup into the corporate structure of the main company.
        In this role I trained up the QA on the Galway side on test automation (selenium & groovy) so that they could write up the tests (most of the QA had never done any programming).
        I got to take my hand to the back-end and write up some features with Java & BASH.
        One feature in particular that I spent a lot of time on was audit logging (utilising Splunk).
        `
        )}

        {aboutYear(
          2016,
          `In May of 2016 I joined the IBM Security division as a Front-End software engineer.
          Here I worked on creating features for a Security web application which helped monitor security attacks against endpoints in your company.
          I was mainly working with Angular.js & Node.js.
          IBM is where I really found my feet in terms of Agile ceremonies, working in remote global co-located teams, and seeing how a multi-national works (the pros and cons).
          I really enjoyed learning the security domain. I learned all about the ins and outs of malware and just how fragile the whole worlds infrastructure is due to this malware.`
        )}

        {aboutYear(
          2015,
          `I continued working on my first contract (which I received in 2014) for Enterprise Ireland which involved creating a mobile cross platform food ordering application,
          which would allows customers to order food, drinks, and custom sandwiches from their phone.
          This involved a top up system with top up codes so that you could pay via the app.
          In 2015 I received a second contract, which involved created a cross platform mobile application
          that would allow realtors to view real-estate information in real time,
          and allow the company to utilize push notifications to let their clients know quickly about deals.
          I used the Ionic framework with Angular.js in order to create these applications, and published them to the iOS & Android stores.
          I was in charge of the UI design, mobile development, and most of the customer interactions.`
        )}
      </Layout>
    )}
  />
)

export default AboutPage
