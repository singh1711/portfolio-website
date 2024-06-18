import React from 'react'
import "./contactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

function ContactMe() {
  return (
  <>
    <Navbar/>
    <section className='contact-container'>
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="src\assets\email.png"
            text="abhishek.singh171197@gmail.com"
          />
          <ContactInfoCard
            iconUrl="src\assets\github.png"
            text="https://github.com/singh1711"
          />
        </div>
        <div style={{flex: 1}}>
          <ContactForm/>
        </div>
      </div>
    </section>
    <Footer/>
  </>
  )
}

export default ContactMe