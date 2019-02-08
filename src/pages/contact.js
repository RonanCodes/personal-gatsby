import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <p>
        Lorem ipsum dolor amet pitchfork chicharrones brunch ugh twee
        microdosing intelligentsia kogi semiotics meh. Disrupt meditation
        letterpress next level marfa laboris. Godard messenger bag next level,
        mumblecore art party copper mug anim craft beer magna meh narwhal
        deserunt biodiesel glossier. Man braid scenester heirloom green juice
        occaecat culpa. Ex chicharrones deserunt master cleanse kogi ea salvia
        DIY lorem.
      </p>

      <ContactForm />
    </div>
  </Layout>
)

export default ContactPage
