/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Heading from "../layout/Heading";
import Curiosity from "../../images/Curiosity.jpg";
import ExoMars from "../../images/exomars.jpg";

export function InternationalSpaceStation() {
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

      <div className="Mars">
        <Col>
          <Row>
            <Col>
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
          <h2>Meet</h2>
          <Row>
            <Card className="card">
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
          </Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </div>
    </>
  );
}

export default InternationalSpaceStation;
