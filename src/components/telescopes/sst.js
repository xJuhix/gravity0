/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spitzer from "../../images/telescope/spitzer.jpg";

export function SpitzerSpaceTelescope() {
  return (
    <>
      <Row className="telescope">
        <Col md={12} lg={6}>
          <div className="telescope__information">
            <p>
              The Spitzer Space Telescope is the final mission in NASA's Great
              Observatories Program - a family of four space-based
              observatories, each observing the Universe in a different kind of
              light. Spitzer is designed to detect infrared radiation, which is
              primarily heat radiation.
            </p>
            <p>
              Spitzer was originally built to last for a minimum of 2.5 years,
              but it lasted in the cold phase for over 5.5 years. On May 15,
              2009 the coolant was finally depleted and the Spitzer "warm
              mission" began. Operating with 2 channels from one of its
              instruments called IRAC, Spitzer can continue to operate until
              late in this decade.
            </p>
            <a target="_blank" href="http://www.spitzer.caltech.edu">
              {" "}
              Source: Spitzer Site, NASA
            </a>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <img
            className="d-block w-100 telescope-image"
            src={Spitzer}
            alt="Spitzer Telescope"
          />
        </Col>
      </Row>
    </>
  );
}

export default SpitzerSpaceTelescope;
