import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Timeline from "../../images/moontomars/timeline.jpg";
import ArtemisMark from "../../images/moontomars/artemismark.jpg";
import ArtemisMissiomap from "../../images/moontomars/artemismissionmap.jpg";

function ArtemisCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Timeline}
          alt="Timeline for Artemis Program"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ArtemisMark}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={ArtemisMissiomap}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ArtemisCarousel;
