import React from 'react'
// import ContactCSS from '../../css/Contact.css'

export default function ContactForm() {
  return (
    <div>
           <main>
  <h2>Send Us a Message</h2>
  <form id="form" className="form">
    {/* <div class="form-divs success">  */}
    <div className="form-divs">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" placeholder="Enter your first name" />
      <span className="alert-icon">
        <ion-icon name="alert-circle-outline" />
      </span>
      <span className="check-icon">
        <ion-icon name="checkmark-circle-outline" />
      </span>
      <small>Error Message</small>
    </div>
    {/* <div class="form-divs error"> */}
    <div className="form-divs">
      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" placeholder="Enter your last name" />
      <span className="alert-icon">
        <ion-icon name="alert-circle-outline" />
      </span>
      <span className="check-icon">
        <ion-icon name="checkmark-circle-outline" />
      </span>
      <small>Error Message</small>
    </div>
    <div className="form-divs">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter you email" />
      <span className="alert-icon">
        <ion-icon name="alert-circle-outline" />
      </span>
      <span className="check-icon">
        <ion-icon name="checkmark-circle-outline" />
      </span>
      <small>Error Message</small>
    </div>
    <div className="form-divs">
      <label htmlFor="message">Message</label>
      <input type="text" id="message" placeholder="Enter your message" />
      <span className="alert-icon">
        <ion-icon name="alert-circle-outline" />
      </span>
      <span className="check-icon">
        <ion-icon name="checkmark-circle-outline" />
      </span>
      <small>Error Message</small>
    </div>
    <button className="submit">SUBMIT</button>
  </form>
      </main>


    </div>
  )
}
