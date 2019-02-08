import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

const ContactPage = ({ location }) => (
  <StaticQuery
    query={graphql`
      query ContactImageQuery {
        file(relativePath: { regex: "/typewriter/" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Layout location={location}>
        <div>
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              width: '500px',
              margin: 'auto',
            }}
          />
          <p>
            Pickled cliche elit lyft jianbing messenger bag mixtape normcore.
            8-bit typewriter velit, schlitz locavore occupy deep v you probably
            haven't heard of them tattooed hot chicken meditation PBR&B
            scenester. Affogato magna put a bird on it hot chicken. Semiotics
            XOXO hashtag ut meggings scenester narwhal irony af. Salvia man bun
            distillery brunch chicharrones esse vaporware direct trade fanny
            pack pickled messenger bag flannel art party. Ugh laborum aliquip
            enamel pin do tofu.
          </p>

          {/* // TODO: TRY this next: https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/contact.js */}

          <ContactForm />
          {/* PUT FORM DIRECTLY IN HERE< NOT AS A COMMPONENT */}
          {/* <form
            name="contact"
            method="post"
            data-netlify="true"
            actoin="/pages/success"
          >
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{' '}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form> */}
        </div>
      </Layout>
    )}
  />
)

export default ContactPage

// import React from 'react'
// import { navigateTo } from 'gatsby-link'

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//     .join('&')
// }

// export default class Contact extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     const form = e.target
//     fetch('/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: encode({
//         'form-name': form.getAttribute('name'),
//         ...this.state,
//       }),
//     })
//       .then(() => navigateTo(form.getAttribute('action')))
//       .catch(error => alert(error))
//   }

//   render() {
//     return (
//       <div>
//         <h1>Contact</h1>
//         <form
//           name="contact"
//           method="post"
//           action="/thanks/"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           onSubmit={this.handleSubmit}
//         >
//           {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
//           <input type="hidden" name="form-name" value="contact" />
//           <p hidden>
//             <label>
//               Don’t fill this out:{' '}
//               <input name="bot-field" onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your name:
//               <br />
//               <input type="text" name="name" onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Your email:
//               <br />
//               <input type="email" name="email" onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <label>
//               Message:
//               <br />
//               <textarea name="message" onChange={this.handleChange} />
//             </label>
//           </p>
//           <p>
//             <button type="submit">Send</button>
//           </p>
//         </form>
//       </div>
//     )
//   }
// }
