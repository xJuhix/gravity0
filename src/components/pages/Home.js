/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import APOD from "../nasa/APOD";
import moonImg from "../../images/moonImg.png";

export function Home() {
  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `src(${moonImg})` }}
      >
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Gravity0 is a microsite for NASA" />
        </Helmet>

        <Row>
          <Col>
            <div className="page-intro">
              <Heading title="Gravity0" />
              <h2>Microsite for NASA</h2>
              <p>
                Here you will find NASA's telescopes, as well as, active and
                upcoming programs. Alone NASA can only do so much, so over the
                years NASA has devloped realtionships with other space agenices
                and together they will explore the endless unknown. The purpose
                of GravityZero is to infrom the public about active space
                programs and missions as well as upcoming ones.
              </p>

              <blockquote className="page__blockquote">
                <q>Curiosity is the essence of our excistence</q>
                <footer className="blockquote-footer">Gene Cernan</footer>
              </blockquote>
            </div>
          </Col>
        </Row>

        <div className="explore__buttons">
          <a target="_blank" href="https://eyes.nasa.gov/curiosity/">
            <Button variant="explore" size="lg">
              See Mars through Curiosity's Eyes
            </Button>
          </a>

          <Link to="/iss">
            <Button variant="explore" size="lg">
              Find out who is in space right now
            </Button>
          </Link>

          <a target="_blank" href="http://spacetelescopelive.org">
            <Button variant="explore" size="lg">
              What is Hubble looking at now ?
            </Button>
          </a>
        </div>

        <div className="explore__buttons">
          <a target="_blank" href="https://youtu.be/6VqG3Jazrfs">
            <Button variant="explore" size="lg">
              James Webb 2021
            </Button>
          </a>

          <Link to="/marsrover/">
            <Button variant="explore" size="lg">
              How are we gonna get to Mars
            </Button>
          </Link>
        </div>

        <div className="NASA-Image">
          <APOD />
        </div>
      </div>
    </>
  );
}

export default Home;
