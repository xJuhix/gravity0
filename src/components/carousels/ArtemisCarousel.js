import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Timeline from "../../images/timeline.jpg";
import ArtemisMark from "../../images/artemismark.jpg";
import ArtemisMissiomap from "../../images/artemismissionmap.jpg";
// import ArtemisPatch from "../../images/em1patch.png";
// import Orion from "../../images/orion.jpg";
// import PBS from "../../images/pbs.jpg";
// import SLSDeepspace from "../../images/slsdeepspace.jpg";

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
