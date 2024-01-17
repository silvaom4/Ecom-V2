import React from "react";
import Header from "./Header/Header";
import Font from "./Header/Font";
import Footer from "./Footer/Footer";
import ContactForm from "./Main/ContactForm";
import ContactCSS from '../css/Contact.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div>

      <Font />
      <Header />

      <ContactForm />

      <Footer />

    </div>
  );
}
