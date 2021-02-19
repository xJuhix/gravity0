import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PersianGulf from "../../images/persiangulf.jpg";
import Iss from "../../images/issartist.jpg";
import IssEarth from "../../images/issoverearth.jpg";
import IssMoon from "../../images/moonfromiss.jpg";
import IssNiel from "../../images/nielbyiss.jpg";
import IssAurora from "../../images/auroraboralis.jpg";

function IssCarousel() {
  return (
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
  );
}

export default IssCarousel;
