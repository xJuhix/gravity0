/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chandra from "../../images/telescope/Chandra.jpg";

export function ChandraOberservetory() {
  return (
    <>
      <div className="telescope">
        <Row>
          <Col md={12} lg={6}>
            <div className="telescope__information">
              <p>
                Since its launch on July 23, 1999, the Chandra X-ray Observatory
                has been NASA's flagship mission for X-ray astronomy, taking its
                place in the fleet of "Great Observatories." Its mission is
                ongoing as of 2021.
              </p>
              <p>
                NASA's Chandra X-ray Observatory is a telescope specially
                designed to detect X-ray emission from very hot regions of the
                Universe such as exploded stars, clusters of galaxies, and
                matter around black holes. Because X-rays are absorbed by
                Earth's atmosphere, Chandra must orbit above it, up to an
                altitude of 139,000 km (86,500 mi) in space.
              </p>
              <a target="_blank" href="https://chandra.harvard.edu">
                {" "}
                Source: Chandra Site, NASA
              </a>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <img
              className="d-block w-100 telescope-image"
              src={Chandra}
              alt="Chandra X-ray Observatory"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ChandraOberservetory;
