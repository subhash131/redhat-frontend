"use client";
import React from "react";
import {
  CallOutline,
  LocationOutline,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
  MailOutline,
} from "react-ionicons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <div className="container">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Popular Categories</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Fashion
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Electronic
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Cosmetic
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Health
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Watches
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Products</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Our Company</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Delivery
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Legal Notice
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Terms and conditions
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                About us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Secure payment
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Services</h2>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Prices drop
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                New products
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Best sales
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Contact us
              </a>
            </li>

            <li className="footer-nav-item">
              <a href="#" className="footer-nav-link">
                Sitemap
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Contact</h2>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <LocationOutline />
              </div>

              <address className="content">Bangalore, India</address>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <CallOutline />
              </div>

              <a href="tel:+607936-8058" className="footer-nav-link">
                +91 7895469871
              </a>
            </li>

            <li className="footer-nav-item flex">
              <div className="icon-box">
                <MailOutline />
              </div>

              <a href="mailto:example@gmail.com" className="footer-nav-link">
                example@gmail.com
              </a>
            </li>
          </ul>

          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <h2 className="nav-title">Follow Us</h2>
            </li>

            <li>
              <ul className="social-link">
                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoFacebook />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoTwitter />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoLinkedin />
                  </a>
                </li>

                <li className="footer-nav-item">
                  <a href="#" className="footer-nav-link">
                    <LogoInstagram />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright &copy; <a href="#">RedHat Hackathon</a> all rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
