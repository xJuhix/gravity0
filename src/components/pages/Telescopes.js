/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-named-as-default-member */
import React from "react";
import { Helmet } from "react-helmet";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import JamesWebbTelescope from "../telescopes/jwst";
import HubbleTelescope from "../telescopes/hst";
import SpitzerTelescope from "../telescopes/sst";
import ChandraOberservetory from "../telescopes/co";
import ComptonObservatory from "../telescopes/cgro";
import TelescopeCarousel from "../carousels/TelescopeCarousel";

export function Telescopes() {
  return (
    <>
      <Helmet>
        <title>Telescopes</title>
        <meta
          name="description"
          content="Here you will see the telescopes that NASA developed and are developing"
        />
      </Helmet>

      <div className="telescopes">
        <Col>
          <Heading title="James Webb" />
          <JamesWebbTelescope />
          <Jumbotron>
            <Container>
              <div className="jumbotron-header gro">
                <Heading title="Great Observatories program" />
              </div>
              <p>
                To grasp the wonders of the cosmos, and understand its infinite
                variety and splendor, we must collect and analyze radiation
                emitted by phenomena throughout the entire electromagnetic (EM)
                spectrum. Towards that end, NASA proposed the concept of Great
                Observatories, a series of four space-borne observatories
                designed to conduct astronomical studies over many different
                wavelengths (visible, gamma rays, X-rays, and infrared). An
                important aspect of the Great Observatory program was to overlap
                the operations phases of the missions to enable astronomers to
                make contemporaneous observations of an object at different
                spectral wavelengths.
              </p>
            </Container>
          </Jumbotron>
          <h2>Hubble Space Telescope</h2>

          <HubbleTelescope />

          <h2>Chandra X-ray Observatory</h2>

          <ChandraOberservetory />

          <h2>Spitzer Space Telescope</h2>

          <SpitzerTelescope />

          <h2>Compton Gamma Ray Observatory</h2>

          <ComptonObservatory />
        </Col>
        <TelescopeCarousel />
      </div>
    </>
  );
}

export default Telescopes;
