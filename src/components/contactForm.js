// import React from 'react'
// import styled from 'styled-components'

// const Form = styled.form`
//   /* border: 1px solid black; */
//   margin: auto;
//   /* margin-top: 100px; */
//   /* background: yellow; */

//   max-Width: 602px;
//   /* text-align: center; */

//   /* position: absolute;
//   top: 50%;
//   height: 400px;*/
//   margin-top: 100px;

//   label {
//     max-Width: 100px;
//     display: inline-block;
//   }

//   input {
//     /* margin-left: 10px; */
//     max-Width: 500px;
//   }

//   textarea {
//     max-Width: 600px;
//   }

//   .hidden {
//     visibility: hidden;
//     position: absolute;
//   }

//   .actions {
//     max-Width: 600px;
//     margin: 0;
//     text-align: center;
//     li {
//       display: inline;
//       button,
//       input {
//         max-Width: 200px;
//         margin-left: 20px;
//         margin-right: 20px;
//       }
//     }
//   }
// `

// const ContactForm = () => (
//   <form name="contact" method="POST" data-netlify="true">
//     <p>
//       <label>
//         Your Name: <input type="text" name="name" />
//       </label>
//     </p>
//     <p>
//       <label>
//         Your Email: <input type="email" name="email" />
//       </label>
//     </p>
//     <p>
//       <label>
//         Your Role:{' '}
//         <select name="role[]" multiple>
//           <option value="leader">Leader</option>
//           <option value="follower">Follower</option>
//         </select>
//       </label>
//     </p>
//     <p>
//       <label>
//         Message: <textarea name="message" />
//       </label>
//     </p>
//     <p>
//       <button type="submit">Send</button>
//     </p>
//   </form>

//   // <form
//   //   name="contact"
//   //   method="post"
//   //   data-netlify="true"
//   //   data-netlify-honeypot="bot-field"
//   // >
//   //   <input type="hidden" name="bot-field" />
//   //   <div className="field half first">
//   //     <label htmlFor="name">Name</label>
//   //     <input type="text" name="name" id="name" />
//   //   </div>
//   //   <div className="field half">
//   //     <label htmlFor="email">Email</label>
//   //     <input type="text" name="email" id="email" />
//   //   </div>
//   //   <div className="field">
//   //     <label htmlFor="message">Message</label>
//   //     <textarea name="message" id="message" rows="6" />
//   //   </div>
//   //   <ul className="actions">
//   //     <li>
//   //       <input type="submit" value="Send Message" className="special" />
//   //     </li>
//   //     <li>
//   //       <input type="reset" value="Clear" />
//   //     </li>
//   //   </ul>
//   // </form>

//   // <Form
//   //   name="contact"
//   //   method="POST"
//   //   netlify-honeypot="bot-field"
//   //   data-netlify="true"
//   // >
//   //   <p className="hidden">
//   //     <label>
//   //       Don’t fill this out if you're human: <input name="bot-field" />
//   //     </label>
//   //   </p>
//   //   <p>
//   //     <label>Name:</label>
//   //     <input type="text" name="name" />
//   //   </p>
//   //   <p>
//   //     <label>Email:</label>
//   //     <input type="email" name="email" />
//   //   </p>
//   //   <label>Message:</label>
//   //   <p>
//   //     <textarea name="message" rows="6" />
//   //   </p>
//   //   <ul className="actions">
//   //     <li>
//   //       <button type="submit">Send</button>
//   //     </li>
//   //     <li>
//   //       <input type="reset" value="Clear" />
//   //     </li>
//   //   </ul>
//   // </Form>
// )

// export default ContactForm

import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

const Form = styled.form`
  /* border: 1px solid black; */
  margin: auto;
  /* margin-top: 100px; */
  /* background: yellow; */

  max-width: 602px;
  /* text-align: center; */

  /* position: absolute;
  top: 50%;
  height: 400px;*/
  margin-top: 100px;
  margin-bottom: 100px;
  /* display: inline; */

  label {
    /* max-width: 100px; */
    width: 20%;
    display: inline-block;
  }

  p.message-container label {
    width: 30%;
  }

  input,
  button {
    /* margin-left: 10px; */
    /* max-width: 500px; */
    width: 80%;
    /* width: 70%; */
    display: inline-block;
  }

  .userInput {
    /* border: 2px inset #d3d3d3;
    background: #e2e2e2; */
    border: 2px inset #e2e2e2;
    background: #eaeaea;
    border-radius: 10px;
  }

  textarea {
    width: 100%;
    background: #e2e2e2;
    resize: none;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
  }

  .actions {
    max-width: 600px;
    text-align: center;
    li {
      display: inline;
      button,
      input {
        max-width: 200px;
        margin: 5px 20px 5px 20px;
      }
    }

    button,
    input {
      background: #aeafe8;
      border-radius: 10px;
    }
  }
`

// Create the data object with key/value pairs for the body of the submission
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  // Create state object
  constructor(props) {
    super(props)
    this.state = {}
  }

  // Save input changes to state
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // Handle the submission process
  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        {/* <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </Form> */}

        <Form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p className="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>Name:</label>
            <input
              className="userInput"
              type="text"
              name="name"
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label>Email:</label>
            <input
              className="userInput"
              type="email"
              name="email"
              onChange={this.handleChange}
              required
            />
          </p>
          <p className="message-container">
            <label>Message:</label>
            <textarea
              className="userInput"
              name="message"
              rows="6"
              onChange={this.handleChange}
              required
            />
          </p>
          <ul className="actions">
            <li>
              <button type="submit">Send</button>
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </Form>
      </div>
    )
  }
}
