/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import ArtemisCarousel from "../carousels/ArtemisCarousel";

export function MoonToMars() {
  return (
    <>
      <Helmet>
        <title>Moon to Mars</title>
        <meta
          name="description"
          content="The Moon to Mars will cover Artemis a part of the program on how we are going to reach Mars."
        />
      </Helmet>

      <Jumbotron>
        <Container>
          <Heading title="Artemis" />
          <blockquote className="blockquote">
            <q>Mars is there, waiting to be reached</q>
            <footer className="blockquote-footer">Buzz Aldrin</footer>
          </blockquote>
        </Container>
      </Jumbotron>

      <div className="artemis-information">
        <Col>
          <Row>
            <Col>
              <p>
                Artemis is a part of a NASA's program called Explore Moon to
                Mars. Collaborating with commercial and international partners
                to establish sustainable exploration of moon by the end of the
                decade. So that the knowledge gained on and around the Moon to
                send astronauts to Mars.
              </p>
              <p>
                The first part of the program is to have sent the first woman
                and the next man to the moon by 2024.
              </p>

              <Row>
                <iframe
                  width="770"
                  height="450"
                  src="https://www.youtube.com/embed/vl6jn-DdafM"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Going to the moon"
                />
              </Row>
            </Col>
            <Col>
              <p>
                Artemis I, formerly Exploration Mission-1, is the first in a
                series of increasingly complex missions that will enable human
                exploration to the Moon and Mars.Artemis I will be an uncrewed
                flight test that will provide a foundation for human deep space
                exploration, and demonstrate our commitment and capability to
                extend human existence to the Moon and beyond.
              </p>
              <p>
                During this flight, the spacecraft will launch on the most
                powerful rocket in the world and fly farther than any spacecraft
                built for humans has ever flown. It will travel 280,000 miles
                from Earth, thousands of miles beyond the Moon over the course
                of about a three-week mission. Orion will stay in space longer
                than any ship for astronauts has done without docking to a space
                station and return home faster and hotter than ever before.
              </p>
              <a target="_blank" href="https://www.jwst.nasa.gov">
                {" "}
                Source: NASA
              </a>
              <Row>
                <iframe
                  width="770"
                  height="400"
                  src="https://www.youtube.com/embed/_T8cn2J13-4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="How are we going"
                />
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
      <ArtemisCarousel />
    </>
  );
}

export default MoonToMars;
