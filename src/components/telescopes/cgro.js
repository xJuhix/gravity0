/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CGRO from "../../images/telescope/CGRO.jpg";

export function CGRObservatory() {
  return (
    <>
      <Row className="telescope">
        <Col md={12} lg={6}>
          <div className="telescope__information">
            <p>
              The Compton Gamma Ray Observatory was the second of NASA's Great
              Observatories. Compton, at 17 tons, was the heaviest astrophysical
              payload ever flown at the time of its launch on April 5, 1991
              aboard the space shuttle Atlantis. Compton was safely deorbited
              and re-entered the Earth's atmosphere on June 4, 2000.
            </p>
            <a
              target="_blank"
              href="https://heasarc.gsfc.nasa.gov/docs/cgro/index.html"
            >
              {" "}
              Source: CGRO Site, NASA
            </a>
            <p>
              The Compton Gamma Ray Observatory (CGRO) is a sophisticated
              satellite observatory dedicated to observing the high-energy
              Universe. It is the second in NASA's program of orbiting "Great
              Observatories", following the Hubble Space Telescope. While
              Hubble's instruments operate at visible and ultraviolet
              wavelengths, Compton carries a collection of four instruments
              which together can detect an unprecedented broad range of
              high-energy radiation called gamma rays
            </p>
            <a
              target="_blank"
              href="https://heasarc.gsfc.nasa.gov/docs/cgro/cgro/"
            >
              {" "}
              Source: CGRO Site, NASA
            </a>
          </div>
        </Col>
        <Col md={12} lg={6}>
          <img
            className="d-block w-100 telescope-image"
            src={CGRO}
            alt="Compton Gamma Ray Observatory"
          />
        </Col>
      </Row>
    </>
  );
}

export default CGRObservatory;
