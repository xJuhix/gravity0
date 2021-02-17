/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";

export function Books() {
  return (
    <>
      <Helmet>
        <title>Telescopes</title>
        <meta
          name="description"
          content="WittigNotes Books page, here you will find book recomentdation, book reviews and my book bag."
        />
      </Helmet>
      <div className="telescopes">
        <Col>
          <Heading title="Hubble" />
          <Row>
            <Col>
              <p>
                Hubble is one of NASA’s most successful and long-lasting science
                missions. It has beamed hundreds of thousands of images back to
                Earth, shedding light on many of the great mysteries of
                astronomy.
              </p>
              <p>
                Hubble played a key role in the discovery of dark energy, a
                mysterious force that causes the expansion of the universe to
                accelerate. As well as, shown scientists galaxies in all stages
                of evolution, including galaxies that were around when the
                universe was still young, helping them understand how galaxies
                form. It found protoplanetary disks, clumps of gas and dust
                around young stars that likely function as birthing grounds for
                new planets. It discovered that gamma-ray bursts — strange,
                incredibly powerful explosions of energy — can occur in
                far-distant galaxies when massive stars collapse. And these are
                only a handful of its many continuing contributions to
                astronomy.
              </p>
              <a target="_blank" href="https://www.jwst.nasa.gov">
                {" "}
                Source: Hubble Site, NASA
              </a>
            </Col>
            <Col>img from hubbs</Col>
          </Row>
          <Heading title="James Webb" />
          <Row>
            <Col>
              <p>
                Webb will be the premier observatory of the next decade, serving
                thousands of astronomers worldwide. It will study every phase in
                the history of our Universe, ranging from the first luminous
                glows after the Big Bang, to the formation of solar systems
                capable of supporting life on planets like Earth, to the
                evolution of our own Solar System.
              </p>
              <p>
                James Webb is sechduled to launch 31.October 2021, from Guiana
                Space Centre (Le Centre Spatial Guyanais, CSG) in Kourou, French
                Guiana, onboard an Ariane 5 rocket provided by the European
                Space Agency. It is being devloped in partnership with the
                Euopean Space Agency (ESA) and the Canadian Space Agency (CSA)
                and will be opereated by AURA’s Space Telescope Science
                Institute.
              </p>
              <a target="_blank" href="https://www.jwst.nasa.gov">
                {" "}
                Source: JWST, NASA
              </a>
            </Col>
            <Col>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6VqG3Jazrfs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="James Webb Telescope"
              />
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
}

export default Books;
