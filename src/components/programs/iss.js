/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";

export function InternationalSpaceStation() {
  return (
    <>
      <Helmet>
        <title>International Space Station</title>
        <meta name="description" content="The International Space Station." />
      </Helmet>

      <Jumbotron>
        <Container>
          <Heading title="International Space Sation" />
        </Container>
      </Jumbotron>

      <div className="iss">
        <Col>
          <Row>
            <Col md={6}>
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
              <a target="_blank" href="https://www.jwst.nasa.gov">
                {" "}
                Source: NASA
              </a>
            </Col>
            <Col>
              <h3>Who is space right now </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Launched in 1998 and involving the U.S., Russia, Canada, Japan,
                and the participating countries of the European Space Agency—the
                International Space Station is one of the most ambitious
                international collaborations ever attempted. The largest space
                station ever constructed, the ISS continues to be assembled in
                orbit. It has been visited by astronauts from 18 countries—and
                counting.
              </p>
            </Col>
            <Col>
              <h3>Where is the Space Station right now </h3>
            </Col>
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
