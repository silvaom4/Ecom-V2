import React from 'react'
import { IonIcon } from "@ionic/react";
import { logoInstagram } from "ionicons/icons";
import { logoLinkedin } from "ionicons/icons";
import { logoFacebook } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";

export default function Footer() {
  return (
    <div>
        <footer>
          <div className="footer-icons">
            <ul className="footer-items">
              <li className="footer-item">
                <a
                  href="https://www.instagram.com/gucci/"
                  aria-label="gucci-instagram"
                >
                  <IonIcon icon={logoInstagram} />
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="https://www.linkedin.com/company/gucci"
                  aria-label="gucci-linkedin"
                >
                  <IonIcon icon={logoLinkedin} />
                </a>
              </li>
              <li className="footer-item">
                <a
                  href="https://www.facebook.com/GUCCI/"
                  aria-label="gucci-facebook"
                >
                  <IonIcon icon={logoFacebook} />
                </a>
              </li>
              <li className="footer-item">
                <a href="https://twitter.com/gucci" aria-label="gucci-twitter">
                  <IonIcon icon={logoTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-signature">
            Website made by Oscar Silva @ 2023
          </div>
        </footer>

    </div>
  )
}
