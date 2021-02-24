/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function WebbTelescope() {
  return (
    <>
      <Row className="telescope webbtelescope">
        <Col>
          <div className="telescope__information">
            <p>
              Webb will be the premier observatory of the next decade, serving
              thousands of astronomers worldwide. It will study every phase in
              the history of our Universe, ranging from the first luminous glows
              after the Big Bang, to the formation of solar systems capable of
              supporting life on planets like Earth, to the evolution of our own
              Solar System.
            </p>
            <p>
              Webb will work simultaneously with Hubble until its mission ends
              and the JWST replaces it.
            </p>
            <p>
              James Webb is sechduled to launch 31.October 2021, from Guiana
              Space Centre in Kourou, French Guiana, onboard an Ariane 5 rocket
              provided by the European Space Agency. It is being devloped in
              partnership with the Euopean Space Agency (ESA) and the Canadian
              Space Agency (CSA) and will be opereated by AURA’s Space Telescope
              Science Institute.
            </p>
            <a target="_blank" href="https://www.jwst.nasa.gov">
              {" "}
              Source: JWST, NASA
            </a>
          </div>
        </Col>

        <Col className="webbvideo">
          <iframe
            width="770"
            height="500"
            src="https://www.youtube.com/embed/6VqG3Jazrfs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="James Webb Telescope"
          />
        </Col>
      </Row>
    </>
  );
}

export default WebbTelescope;
