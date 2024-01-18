import React, { useState } from "react";
// import ContactCSS from '../../css/Contact.css'
import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { checkmarkCircleOutline } from "ionicons/icons";

export default function ContactForm() {
  // let form = document.getElementById('form');
  // let firstName = document.getElementById('first-name');
  // let lastName = document.getElementById('last-name');
  // let email = document.getElementById('email');
  // let message = document.getElementById('message');

  // form.addEventListener('submit', function(e){
  //     e.preventDefault();

  //     checkInputs();
  // })

  // function checkInputs() {
  //     let firstNameValue = firstName.value.trim();
  //     let lastNameValue = lastName.value.trim();
  //     let emailValue = email.value.trim();

  //     if(firstNameValue === ''){
  //         console.log('error works')
  //         setErrorFor(firstName, 'Please enter your first name')
  //     } else {
  //         console.log('success works')
  //         setSuccessFor(firstName, 'Thank you for entering your first name ')
  //     }

  //     if (lastNameValue === '') {
  //         setErrorFor(lastName, 'Please enter your last name')
  //     } else {
  //         setSuccessFor(lastName, 'Thank you for entering your last name ')
  //     }

  //     if (emailValue === '') {
  //         setErrorFor(email, 'Please enter your email')
  //     } else if(!isEmail(emailValue)) {
  //         setErrorFor(email, 'Email is not valid');
  //     } else {
  //         setSuccessFor(email,'Thank you for entering your email')
  //     }

  // }

  // // start here and fix the icons

  // function setErrorFor(input, message) {
  //     let formControl = input.parentElement

  //     let small = formControl.querySelector('small')
  //     small.innerHTML = message

  //     formControl.className = 'form-divs error'
  // }

  // function setSuccessFor(input, message) {
  //     let formControl = input.parentElement

  //     let small = formControl.querySelector('small')

  //     small.innerHTML = message
  //     formControl.className = 'form-divs success'
  // }

  // function isEmail(email) {
  //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  // }
  const [firstName, setFirstName] = useState("");
  const [valid, setValid] = useState("");
  const [message, setMessage] = useState("");

  const [lastName, setLastName] = useState("");
  const [validLast, setValidLast] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log("hello world");
    checkInputs();
    checkLastName();
    checkEmail()
    console.log(e.target.value);
  };

  const checkInputs = () => {
    if (firstName === "") {
      setValid("error");
      setMessage("Please enter your first name");
    } else {
      setValid("success");
      setMessage("Thank you for entering your first name");
    }
  };

  const checkLastName = () => {
    if (lastName === "") {
      setValidLast("error");
      setLastNameMessage("Please enter your last name");
    } else {
      setValidLast("success");
      setLastNameMessage("Thank you for entering your last name");
    }
  };
  const checkEmail = () => {
    if (email === '') {
      setValidEmail('error')
      setEmailMessage('Please enter your email')
    } else if (!isEmail(email)) {
      setEmailMessage('Email is not valid')
    } else {
      setValidEmail('success')
      setEmailMessage('Thank you for entering your email')
    }
  }
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  return (
    <div>
      <main>
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmitButton} id="form" className="form">
          {/* <div class="form-divs success">  */}
          <div className={`form-divs ${valid}`}>
            <label htmlFor="first-name">First Name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="first-name"
              placeholder="Enter your first name"
            />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{message}</small>
          </div>
          {/* <div class="form-divs error"> */}
          <div className={`form-divs ${validLast}`}>
            <label htmlFor="last-name">Last Name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="last-name"
              placeholder="Enter your last name"
            />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{lastNameMessage}</small>
          </div>

          <div className={`form-divs ${validEmail}`}>
            <label htmlFor="email">Email</label>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" id="email" placeholder="Enter you email" />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>{emailMessage}</small>
          </div>
          <div className="form-divs">
            <label htmlFor="message">Message</label>
            <input type="text" id="message" placeholder="Enter your message" />
            <span className="alert-icon">
              <IonIcon icon={alertCircleOutline} />
            </span>
            <span className="check-icon">
              <IonIcon icon={checkmarkCircleOutline} />
            </span>
            <small>Error Message</small>
          </div>
          <button className="submit">SUBMIT</button>
        </form>
      </main>
    </div>
  );
}
