import React from 'react'
import { IonIcon } from "@ionic/react";
import { bagOutline } from "ionicons/icons";
import { personOutline } from "ionicons/icons";
import { searchOutline } from "ionicons/icons";


export default function Header() {
  return (
    <div>
         <header>
          <nav>
            <div className="span-header">
              <div className="contact-header">
                <a href="/contact">Contact Us</a>
              </div>
              <h1 className="main-header">
                <a href="/">G U C C I</a>
              </h1>
              <div className="header-icons">
                <ul className="header-items">
                  <li className="header-lists">
                    <a href="/products" aria-label="products page">
                      <IonIcon icon={bagOutline} />
                    </a>
                  </li>
                  <li className="header-lists">
                    <a href="/contact" aria-label="contact page">
                      <IonIcon icon={personOutline} />
                    </a>
                  </li>
                  <li className="header-lists">
                    <a href="https://gucci.com" aria-label="gucci website">
                      <IonIcon icon={searchOutline} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bar-container">
              <ul className="bar-items">
                <li className="bar-lists">
                  <a href="/contact">Send Us a Message</a>
                </li>
                <li className="bar-lists">
                  <a href="/products">Products</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>





    </div>
  )
}
