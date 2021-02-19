/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Curiosity from "../../images/Curiosity.jpg";
import ExoMars from "../../images/exomars.jpg";

function RoverTabs() {
  return (
    <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
      <Tab eventKey="one" title="Curiosity">
        <Row>
          <Col className="col-12 col-md-4 d-md-block">
            <Image
              src={Curiosity}
              className="rover-image"
              alt="Mars Curiosity Rover"
            />
          </Col>
          <Col className="col-12 col-md-8">
            <h3 className="d-sm-none d-md-block">About Curiosity</h3>
            <p>
              Part of NASA's Mars Science Laboratory mission, Curiosity is the
              largest and most capable rover ever sent to Mars. It launched
              November 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug. 5,
              2012 (1:32 a.m. EDT on Aug. 6, 2012). Curiosity set out to answer
              the question: Did Mars ever have the right environmental
              conditions to support small life forms called microbes? Early in
              its mission, Curiosity's scientific tools found chemical and
              mineral evidence of past habitable environments on Mars. It
              continues to explore the rock record from a time when Mars could
              have been home to microbial life.
              <br /> Curiosity: Launched on 26th of November 2011 and arrived on
              6th of August 2012.
            </p>
            <a target="_blank" href="https://www.jwst.nasa.gov">
              {" "}
              Source: NASA
            </a>
          </Col>
        </Row>
        <a target="_blank" href="https://mars.nasa.gov/msl/home/">
          <Button variant="submit" block className="button mt-auto btn-lg ">
            Learn More
          </Button>
        </a>
      </Tab>
      <Tab eventKey="two" title="ExoMars">
        <Row>
          <Col className="col-12 col-md-4 d-md-block">
            <Image
              src={ExoMars}
              className="rover-image"
              alt="Mars Curiosity Rover"
            />
          </Col>
          <Col className="col-12 col-md-8">
            <h3 className="d-sm-none d-md-block">About ExoMars</h3>
            <p>
              The ExoMars programme comprises two missions: the first – the
              Trace Gas Orbiter – launched in 2016 while the second, comprising
              a rover and surface platform, is planned for 2022. Together they
              will address the question of whether life has ever existed on
              Mars.
              <br /> ExoMars 2016: Launched on March 14th 2016 and arrived on
              Mars October 19th 2016.
            </p>
            <a
              target="_blank"
              href="http://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars"
            >
              {" "}
              Source: ESA
            </a>
          </Col>
        </Row>
        <a
          target="_blank"
          href="http://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars"
        >
          <Button variant="submit" block className="button mt-auto btn-lg ">
            Learn More
          </Button>
        </a>
      </Tab>
      <Tab eventKey="three" title="Preseverance">
        <Row>
          <Col className="col-12 col-md-4 d-md-block">
            <Image
              src={Curiosity}
              className="rover-image"
              alt="Mars Precerverance Rover"
            />
          </Col>
          <Col className="col-12 col-md-8">
            <h3 className="d-sm-none d-md-block">About Preseverance</h3>
            <p>
              The Mars 2020 Perseverance Rover will search for signs of ancient
              microbial life, which will advance NASA's quest to explore the
              past habitability of Mars. The rover has a drill to collect core
              samples of Martian rock and soil, then store them in sealed tubes
              for pickup by a future mission that would ferry them back to Earth
              for detailed analysis. Perseverance will also test technologies to
              help pave the way for future human exploration of Mars. Strapped
              to the rover's belly for the journey to Mars is a technology
              demonstration — the Mars Helicopter, Ingenuity, may achieve a
              "Wright Brothers moment “ by testing the first powered flight on
              the Red Planet.
              <br /> Preseverance: Launched on July 30th 2020 and arrived on
              Mars March 18th 2021.
            </p>
            <a
              target="_blank"
              href="https://mars.nasa.gov/mars2020/mission/overview/"
            >
              {" "}
              Source: NASA
            </a>
          </Col>
        </Row>
        <a
          target="_blank"
          href="https://mars.nasa.gov/mars2020/mission/overview/"
        >
          <Button variant="submit" block className="button mt-auto btn-lg ">
            Learn More
          </Button>
        </a>
      </Tab>
    </Tabs>
  );
}

export default RoverTabs;
