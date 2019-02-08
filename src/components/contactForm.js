import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
  /* border: 1px solid black; */
  margin: auto;
  /* margin-top: 100px; */
  /* background: yellow; */

  width: 602px;
  /* text-align: center; */

  /* position: absolute;
  top: 50%;
  height: 400px;*/
  margin-top: 100px;

  label {
    width: 100px;
    display: inline-block;
  }

  input {
    /* margin-left: 10px; */
    width: 500px;
  }

  textarea {
    width: 600px;
  }

  .hidden {
    visibility: hidden;
    position: absolute;
  }

  .actions {
    width: 600px;
    margin: 0;
    text-align: center;
    li {
      display: inline;
      button,
      input {
        width: 200px;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
`

const ContactForm = () => (
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    {/* action="#" */}
    <input type="hidden" name="bot-field" />
    <div className="field half first">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div className="field">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" />
    </div>
    <ul className="actions">
      <li>
        <input type="submit" value="Send Message" className="special" />
      </li>
      <li>
        <input type="reset" value="Clear" />
      </li>
    </ul>
  </form>
  // <Form
  //   name="contact"
  //   method="POST"
  //   netlify-honeypot="bot-field"
  //   data-netlify="true"
  // >
  //   <p className="hidden">
  //     <label>
  //       Don’t fill this out if you're human: <input name="bot-field" />
  //     </label>
  //   </p>
  //   <p>
  //     <label>Name:</label>
  //     <input type="text" name="name" />
  //   </p>
  //   <p>
  //     <label>Email:</label>
  //     <input type="email" name="email" />
  //   </p>
  //   <label>Message:</label>
  //   <p>
  //     <textarea name="message" rows="6" />
  //   </p>
  //   <ul className="actions">
  //     <li>
  //       <button type="submit">Send</button>
  //     </li>
  //     <li>
  //       <input type="reset" value="Clear" />
  //     </li>
  //   </ul>
  // </Form>
)

export default ContactForm
