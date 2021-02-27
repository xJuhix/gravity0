/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__text">
            <p>&copy; 2021 GravityZero</p>
          </div>
          <div className="footer__links">
            <a
              rel="external"
              target="_blank"
              href="https://www.nasa.gov/about/contact/index.html"
              aria-label="NASA Contact Page"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaEnvelope />
              </span>
            </a>
            <a
              rel="external"
              target="_blank"
              href="https://www.youtube.com/NASA"
              aria-label="NASA Youtubepage"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaYoutube />
              </span>
            </a>
            <a
              rel="external"
              target="_blank"
              href="https://www.instagram.com/NASA/"
              aria-label="NASA Instagram"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaInstagram />
              </span>
            </a>
            <a
              rel="external"
              target="_blank"
              href="https://www.facebook.com/NASA"
              aria-label="NASA Facebook"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaFacebook />
              </span>
            </a>
            <a
              rel="external"
              target="_blank"
              href="https://twitter.com/NASA"
              aria-label=" NASA Twitter"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaTwitter />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
