/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Curiosity from "../../images/mars/curiosity.jpg";
import ExoMars from "../../images/mars/exomars.jpg";
import Preseverance from "../../images/mars/preseverance.jpg";

function RoverAccordian() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Meet Curiosity
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Card.Img
              className="rover-image"
              variant="top"
              src={Curiosity}
              alt="Curiosity Rover"
            />
            <Card.Text>
              <h3 className="d-sm-none d-md-block">About Curiosity</h3>
              <p>
                Part of NASA's Mars Science Laboratory mission, Curiosity is the
                largest and most capable rover ever sent to Mars. It launched
                November 26, 2011 and landed on Mars at 10:32 p.m. PDT on Aug.
                5, 2012 (1:32 a.m. EDT on Aug. 6, 2012). Curiosity set out to
                answer the question: Did Mars ever have the right environmental
                conditions to support small life forms called microbes? Early in
                its mission, Curiosity's scientific tools found chemical and
                mineral evidence of past habitable environments on Mars. It
                continues to explore the rock record from a time when Mars could
                have been home to microbial life.
                <p>
                  Curiosity: Launched on 26th of November 2011 and arrived on
                  6th of August 2012.
                </p>
              </p>
              <a target="_blank" href="https://mars.nasa.gov/msl/home/">
                {" "}
                Source: NASA
              </a>
            </Card.Text>
            <a target="_blank" href="https://mars.nasa.gov/msl/home/">
              <Button variant="submit" block className="button mt-auto btn-lg ">
                Learn More
              </Button>
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Meet ExoMars
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Card.Img
              className="rover-image"
              variant="top"
              src={ExoMars}
              alt="Exomars Rover"
            />
            <Card.Text>
              The ExoMars programme comprises two missions: the first – the
              Trace Gas Orbiter – launched in 2016 while the second, comprising
              a rover and surface platform, is planned for 2022. Together they
              will address the question of whether life has ever existed on
              Mars.
              <p>
                ExoMars 2016: Launched on March 14th 2016 and arrived on Mars
                October 19th 2016.
              </p>
              <a target="_blank" href="http://www.esa.int">
                {" "}
                Source: ESA
              </a>
            </Card.Text>
            <a
              target="_blank"
              href="http://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars"
            >
              <Button variant="submit" block className="button mt-auto btn-lg ">
                Learn More
              </Button>
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Meet Preseverance
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Card.Img
              className=".rover-image"
              variant="top"
              src={Preseverance}
              alt="Curiosity Rover"
            />
            <Card.Text>
              <h3 className="d-sm-none d-md-block">About Preseverance</h3>
              <p>
                The Mars 2020 Perseverance Rover will search for signs of
                ancient microbial life, which will advance NASA's quest to
                explore the past habitability of Mars. The rover has a drill to
                collect core samples of Martian rock and soil, then store them
                in sealed tubes for pickup by a future mission that would ferry
                them back to Earth for detailed analysis. Perseverance will also
                test technologies to help pave the way for future human
                exploration of Mars. Strapped to the rover's belly for the
                journey to Mars is a technology demonstration — the Mars
                Helicopter, Ingenuity, may achieve a "Wright Brothers moment “
                by testing the first powered flight on the Red Planet.
                <p>
                  Preseverance: Launched on July 30th 2020 and arrived on Mars
                  March 18th 2021.
                </p>
              </p>
              <a
                target="_blank"
                href="https://mars.nasa.gov/mars2020/mission/overview/"
              >
                {" "}
                Source: NASA
              </a>
            </Card.Text>
            <a
              target="_blank"
              href="https://mars.nasa.gov/mars2020/mission/overview/"
            >
              <Button variant="submit" block className="button mt-auto btn-lg ">
                Learn More
              </Button>
            </a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default RoverAccordian;
