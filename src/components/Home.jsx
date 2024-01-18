import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomeCSS from "../css/home.css";
// import SliderCSS from "../css/Slider.css"
import { IonIcon } from "@ionic/react";
import Header from "./Header/Header";
import Font from "./Header/Font";
import Footer from "./Footer/Footer";
import Slider from "./Main/Slider";

export default function Home() {
  return (
    <div>
      {/* <h2>HOME PAGE</h2>
      <p>Welcome to thee Home Page</p> */}

      {/* -- - - - - - */}
      {/*     
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      {/* <link rel="stylesheet" href="styles.css" /> */}

      <>
        {/* <title>Oscar's Ecommerce Project Home</title> */}
        <Font />
        <Header />

        <main>
          <section className="hero-container">
            <div className="hero-image">
              <h2>Live with style</h2>
              <p>G U C C I</p>
            </div>
          </section>
        </main>

        <p className="new-new-arrive">New Arrivals</p>

        <div>
          <Slider />
        </div>

        <article className="article-container">
          <span className="article-grid">
            <span></span>
            <span className="join">Join the party.</span>
            <span className="join-p">
              Don't miss out, check out our latest styles and stay in fashion.
            </span>
          </span>
        </article>

        {/* <div className="article-container">
          <p>hello</p>
        </div> */}

        <Footer />
      </>
    </div>
  );
}
