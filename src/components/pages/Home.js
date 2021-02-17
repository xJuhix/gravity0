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
                Here you will find NASA's active and upcoming missions and
                programs, the technology that is being devloped for the mission
                and programs is revolutionary. NASA has over the years devloped
                partnerships with other space agencies both private and
                government owned. So we as a world have come together to explore
                the endless unknown. The purpose of GravityZero is to infrom the
                public about NASA's currently active space programs and missions
                as well as upcoming ones. We would like to share our knowledge
                about NASA's international collaborations.
              </p>

              <blockquote className="page__blockquote">
                <q>Curiosity is the essence of our excistence</q>
                <footer className="blockquote-footer">Gene Cernan</footer>
              </blockquote>
            </div>
          </Col>
        </Row>

        <div className="explore__buttons">
          <a href="https://eyes.nasa.gov/curiosity/">
            <Button variant="explore" size="lg">
              See Mars through Curiosity's Eyes
            </Button>
          </a>

          <a href="http://spacetelescopelive.org">
            <Button variant="explore" size="lg">
              What is Hubble looking at now ?
            </Button>
          </a>

          <Link to="/iss/">
            <Button variant="explore" size="lg">
              Find out who is in space right now
            </Button>
          </Link>
        </div>

        <div className="explore__buttons">
          <Link to="/marsrover/">
            <Button variant="explore" size="lg">
              What is James Webb seeing
            </Button>
          </Link>

          <Link to="/marsrover/">
            <Button variant="explore" size="lg">
              How are we gonna get to Mars
            </Button>
          </Link>
        </div>
        <APOD />
      </div>
    </>
  );
}

export default Home;
