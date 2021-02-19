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
// import Curiosity from "../../images/Curiosity.jpg";
// import ExoMars from "../../images/exomars.jpg";

export function Mars() {
  return (
    <>
      <Helmet>
        <title>Mars Exploration Program</title>
        <meta name="description" content="Mars Exploration Program" />
      </Helmet>

      <Jumbotron>
        <Container>
          <Heading title="Mars Exploration Program" />
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
              <a target="_blank" href="https://www.jwst.nasa.gov">
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
              <h3>Meet</h3>
              <div className="d-md-none rover-accordian">
                <RoverAccordian />
              </div>
              <div className="d-none d-md-block rover-tabs">
                <RoverTabs />
              </div>
            </Container>
          </div>
          <div className="marsporgram__images">
            <p>Add mars image carousel</p>
          </div>
        </Col>
      </div>
    </>
  );
}

export default Mars;

/* <Card className="card">
              <Card.Img
                className="card__image"
                variant="top"
                src={Curiosity}
                alt="Curiosity Rover"
              />
              <Card.Body>
                <Card.Title className="card__title">Curiosity</Card.Title>
                <Card.Text>
                  Bla Bla Bla
                  <a target="_blank" href="https://www.jwst.nasa.gov">
                    {" "}
                    Source: NASA
                  </a>
                </Card.Text>
                <a target="_blank" href="https://mars.nasa.gov/msl/home/">
                  <Button
                    variant="submit"
                    block
                    className="button mt-auto btn-lg "
                  >
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Img
                className="card__image"
                variant="top"
                src={ExoMars}
                alt="Curiosity Rover"
              />
              <Card.Body>
                <Card.Title className="card__title">ExoMars</Card.Title>
                <Card.Text>
                  Bla Bla Bla{" "}
                  <a target="_blank" href="http://www.esa.int">
                    {" "}
                    Source: ESA
                  </a>
                </Card.Text>
                <a
                  target="_blank"
                  href="http://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/ExoMars"
                >
                  <Button
                    variant="submit"
                    block
                    className="button mt-auto btn-lg "
                  >
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>

            <Card className="card">
              <Card.Img className="card__image" variant="top" />
              <Card.Body>
                <Card.Title className="card__title">Perseverance</Card.Title>
                <Card.Text>
                  Bla Bla Bla
                  <a target="_blank" href="https://www.jwst.nasa.gov">
                    {" "}
                    Source: NASA
                  </a>
                </Card.Text>
                <a target="_blank" href="https://mars.nasa.gov/mars2020/">
                  <Button
                    variant="submit"
                    block
                    className="button mt-auto btn-lg "
                  >
                    Learn More
                  </Button>
                </a>
              </Card.Body>
            </Card>
        */
