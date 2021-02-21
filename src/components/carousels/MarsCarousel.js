import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import HeartofMars from "../../images/mars/aheartofmars.jpg";
import PFirstImg from "../../images/mars/pfirstimg.jpg";
import PreseveranceColor from "../../images/mars/preseverancecolormars.jpg";
import CuriositySelfie from "../../images/mars/curiosityselfie.jpg";
import PreseveranceLanding from "../../images/mars/preseverancelanding.jpg";
import PointLake from "../../images/mars/pointlakebyCuriosity.jpg";

function MarsCarousel() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={HeartofMars}
            alt="International Space Station"
          />
          <Carousel.Caption>
            <h3>International Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={PFirstImg}
            alt="The Internaltion Space Station floating over Earth "
          />

          <Carousel.Caption>
            <h3>Internaltion Space Station over Earth</h3>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={PreseveranceColor}
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
            src={PointLake}
            alt="Moon seen from the Internaltion Space Station"
          />

          <Carousel.Caption>
            <h3>Moon seen from the Internaltion Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={CuriositySelfie}
            alt="River Neil seen from the Internaltion Space Station"
          />

          <Carousel.Caption>
            <h3>River Neil seen from the Internaltion Space Station</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={PreseveranceLanding}
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

export default MarsCarousel;
