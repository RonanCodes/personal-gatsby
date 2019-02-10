import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

const Form = styled.form`
  margin: auto;
  max-width: 602px;
  margin-top: 100px;

  label {
    width: 20%;
    display: inline-block;
  }

  p.message-container label {
    width: 30%;
  }

  input,
  button {
    width: 80%;
    display: inline-block;
  }

  .userInput {
    border: 2px inset #e2e2e2;
    background: #eaeaea;
    border-radius: 10px;
  }

  textarea {
    width: 100%;
    background: #e2e2e2;
    resize: none;
    margin-top: 5px;
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

  font-family: 'Open Sans', 'Droid Sans', serif;
`

// Create the data object with key/value pairs for the body of the submission
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

/**
 * A contact us form.
 */
export default class ContactForm extends React.Component {
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
