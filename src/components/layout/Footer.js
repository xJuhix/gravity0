/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__text">
            <p>&copy; 2020 Gravity0</p>
          </div>
          <div className="footer__links">
					<a href= "#"
              aria-label="Mail to Juhi saigal"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaEnvelope />
              </span>
            </a>
            <a
              href="#"
              aria-label="NASA Youtubepage"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaYoutube />
              </span>
            </a>
            <a
              href="#"
              aria-label="NASA Instagram"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaInstagram />
              </span>
            </a>
            <a
              href="#"
              aria-label="NASA Facebook"
              className="footer__socialmedia-icon"
            >
              <span>
                <FaFacebook />
              </span>
            </a>
            <a
              href="#"
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
