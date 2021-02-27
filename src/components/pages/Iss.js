/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import LiveISS from "../iss/liveiss";
import ISSAstros from "../iss/issastros";
import IssCarousel from "../carousels/IssCarousel";

export function InternationalSpaceStation() {
  return (
    <>
      <Helmet>
        <title>International Space Station</title>
        <meta
          name="description"
          content="The International Space Station, who is onboard and where it is"
        />
      </Helmet>

      <Jumbotron>
        <Container>
          <div className="jumbotron-header">
            <Heading title="International Space Sation" />
          </div>
          <blockquote className="blockquote">
            <q>
              The main goal of the International Space Station is to work on
              peaceful projects. In space, we are all people from Earth.
            </q>
            <footer className="blockquote-footer">Sunita Williams</footer>
          </blockquote>
        </Container>
      </Jumbotron>

      <div className="iss">
        <Col className="information">
          <Row>
            <Col sm={6}>
              <p>
                An international partnership of space agencies provides and
                operates the elements of the ISS. The principals are the space
                agencies of the United States, Russia, Europe, Japan, and
                Canada. The ISS has been the most politically complex space
                exploration program ever undertaken. The International Space
                Station Program brings together international flight crews,
                multiple launch vehicles, globally distributed launch,
                operations, training, engineering, and development facilities;
                communications networks, and the international scientific
                research community.
              </p>
            </Col>
            <Col sm={6}>
              <p>
                Launched in 1998 and involving the U.S., Russia, Canada, Japan,
                and the participating countries of the European Space Agency—the
                International Space Station is one of the most ambitious
                international collaborations ever attempted. The largest space
                station ever constructed, the ISS continues to be assembled in
                orbit. It has been visited by astronauts from 18 countries—and
                counting.
              </p>
              <a target="_blank" href="https://www.jwst.nasa.gov">
                {" "}
                Source: NASA
              </a>
            </Col>
          </Row>
          <Row className="live-information">
            <Col sm={6}>
              <h3>Where is the Space Station right now </h3>
              <LiveISS />
            </Col>
            <Col sm={6}>
              <h3>In space right now </h3>
              <ISSAstros />
            </Col>
          </Row>
        </Col>
        <IssCarousel />
      </div>
    </>
  );
}

export default InternationalSpaceStation;
