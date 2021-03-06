/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import RoverTabs from "../mars/RoverTabs";
import RoverAccordian from "../mars/RoverAccordian";
import MarsCarousel from "../carousels/MarsCarousel";

export function Mars() {
  return (
    <>
      <Helmet>
        <title>Mars Exploration Program</title>
        <meta
          name="description"
          content="About NASA's Mars Exploration Program and how we are exploring Mars"
        />
      </Helmet>

      <Jumbotron>
        <Container>
          <Heading title="Mars Exploration Program" />
          <blockquote className="blockquote">
            <q>Mars is the only known planet inhabited solely by robots</q>
            <footer className="blockquote-footer">?</footer>
          </blockquote>
        </Container>
      </Jumbotron>

      <div className="marsprogram">
        <Col>
          <Row>
            <Col className="marsprogram__about">
              <h2>About the Program</h2>
              <p>
                NASA’s Mars Exploration Program is a science-driven,
                technology-enabled study of Mars as a planetary system in order
                to understand: the formation and early Evolution of Mars as a
                planet, the history of geological and climate processes that has
                shaped Mars through time, the potential for Mars to have hosted
                life (its “biological potential”), the future exploration of
                Mars by humans, and how Mars compares to and contrasts with
                Earth.
              </p>
              <a target="_blank" href="https://mars.nasa.gov/">
                {" "}
                Source: NASA
              </a>
            </Col>
            <Col>
              <h2>Mission Statement</h2>
              <p>
                The goal of the Mars Exploration Program is to explore Mars and
                to provide a continuous flow of scientific information and
                discovery through a carefully selected series of robotic
                orbiters, landers and mobile laboratories interconnected by a
                high-bandwidth Mars/Earth communications network.
              </p>
            </Col>
          </Row>
          <h2>How are we exploring Mars</h2>
          <div className="marsprogram__rovers">
            <Container>
              <div className="d-md-block d-lg-none  rover-accordian">
                <RoverAccordian />
              </div>
              <div className="d-none d-md-none d-lg-block rover-tabs">
                <RoverTabs />
              </div>
            </Container>
          </div>
        </Col>
        <MarsCarousel />
      </div>
    </>
  );
}

export default Mars;
