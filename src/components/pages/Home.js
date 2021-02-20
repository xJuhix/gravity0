/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Helmet } from "react-helmet";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import APOD from "../home/APOD";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="GravityZero is a microsite for NASA covering their current and upcoming programs and missions"
        />
      </Helmet>

      <div className="index">
        <Heading title="Gravity0" />
        <h2>Microsite for NASA</h2>
        <p className="index__description">
          Here you will find NASA's telescopes, as well as, active and upcoming
          programs. Alone NASA can only do so much, so over the years NASA has
          devloped realtionships with other space agenices and together they
          will explore the endless unknown. The purpose of GravityZero is to
          infrom the public about active space programs and missions as well as
          upcoming ones.
        </p>

        <blockquote className="index__blockquote">
          <q>Curiosity is the essence of our excistence</q>
          <footer className="blockquote-footer">Gene Cernan</footer>
        </blockquote>
      </div>

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

        <Link to="/telescopes">
          <Button variant="explore" size="lg">
            James Webb 2021
          </Button>
        </Link>

        <Link to="/moontomars">
          <Button variant="explore" size="lg">
            How are we gonna get to Mars
          </Button>
        </Link>
      </div>

      <div className="NASA-Image">
        <APOD />
      </div>
    </>
  );
}

export default Home;
