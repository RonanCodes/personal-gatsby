import React from 'react'
import { navigateTo } from 'gatsby-link'
import styled from 'styled-components'

import { Color, FontFamily } from '../constants'

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
    border: 2px inset ${Color.GREY_MEDIUM};
    background: #eaeaea;
    border-radius: 10px;
  }

  textarea {
    width: 100%;
    background: ${Color.GREY_MEDIUM};
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
      background: ${Color.SECONDARY};
      border-radius: 10px;
    }
  }

  font-family: ${FontFamily.PRIMARY};
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
      <Form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        aria-label="Contact me"
      >
        <p className="hidden" aria-hidden="true">
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="userInput"
            id="name"
            name="name"
            onChange={this.handleChange}
            required
          />
        </p>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="userInput"
            id="email"
            name="email"
            onChange={this.handleChange}
            required
          />
        </p>
        <p className="message-container">
          <label htmlFor="message">Message:</label>
          <textarea
            className="userInput"
            id="message"
            name="message"
            rows="6"
            onChange={this.handleChange}
            required
          />
        </p>
        <ul className="actions">
          <li>
            <button type="submit" aria-label="Submit contact form.">
              Send
            </button>
          </li>
          <li>
            <input
              type="reset"
              value="Clear"
              aria-label="Clear contact form."
            />
          </li>
        </ul>
      </Form>
    )
  }
}
