import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import PersianGulf from "../../images/iss/persiangulf.jpg";
import Iss from "../../images/iss/issartist.jpg";
import IssEarth from "../../images/iss/issoverearth.jpg";
import IssMoon from "../../images/iss/moonfromiss.jpg";
import IssNiel from "../../images/iss/nielbyiss.jpg";
import IssAurora from "../../images/iss/auroraboralis.jpg";

function IssCarousel() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Iss}
            alt="International Space Station"
          />
          <Carousel.Caption>
            <h3>International Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={IssEarth}
            alt="The Internaltion Space Station floating over Earth "
          />

          <Carousel.Caption>
            <h3>Internaltion Space Station over Earth</h3>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={PersianGulf}
            alt="The northern coast of the Persian Gulf"
          />

          <Carousel.Caption>
            <h3>
              The northern coast of the Persian Gulf seen from the Internaltion
              Space Station{" "}
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={IssMoon}
            alt="Moon seen from the Internaltion Space Station"
          />

          <Carousel.Caption>
            <h3>Moon seen from the Internaltion Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={IssNiel}
            alt="River Neil seen from the Internaltion Space Station"
          />

          <Carousel.Caption>
            <h3>River Neil seen from the Internaltion Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={IssAurora}
            alt="Auroraboralis on Earth seen from the Internaltion Space Station"
          />

          <Carousel.Caption>
            <h3>
              Auroraboralis on Earth seen from the Internaltion Space Station
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default IssCarousel;
