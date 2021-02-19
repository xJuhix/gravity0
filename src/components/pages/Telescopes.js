/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Heading from "../layout/Heading";
import HubbleImage from "../telescopes/hubbleimage";

export function Telescopes() {
  return (
    <>
      <Helmet>
        <title>Great Observatories program</title>
        <meta
          name="description"
          content="WittigNotes Books page, here you will find book recomentdation, book reviews and my book bag."
        />
      </Helmet>

      <div className="telescopes">
        <Col>
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
                Webb will work simultaneously with Hubble until its mission ends
                and the JWST replaces it.
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
          <Jumbotron>
            <Container>
              <Heading title="Great Observatories program" />
              <p>
                To grasp the wonders of the cosmos, and understand its infinite
                variety and splendor, we must collect and analyze radiation
                emitted by phenomena throughout the entire electromagnetic (EM)
                spectrum. Towards that end, NASA proposed the concept of Great
                Observatories, a series of four space-borne observatories
                designed to conduct astronomical studies over many different
                wavelengths (visible, gamma rays, X-rays, and infrared). An
                important aspect of the Great Observatory program was to overlap
                the operations phases of the missions to enable astronomers to
                make contemporaneous observations of an object at different
                spectral wavelengths.
              </p>
            </Container>
          </Jumbotron>
          <h2>Hubble</h2>
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
            <Col>
              {" "}
              <HubbleImage />{" "}
            </Col>
          </Row>
          <h2>Chandra X-ray Observatory</h2>
          <Row>
            <Col>
              <p>
                Since its launch on July 23, 1999, the Chandra X-ray Observatory
                has been NASA's flagship mission for X-ray astronomy, taking its
                place in the fleet of "Great Observatories." Its mission is
                ongoing as of 2021.
              </p>
              <p>
                NASA's Chandra X-ray Observatory is a telescope specially
                designed to detect X-ray emission from very hot regions of the
                Universe such as exploded stars, clusters of galaxies, and
                matter around black holes. Because X-rays are absorbed by
                Earth's atmosphere, Chandra must orbit above it, up to an
                altitude of 139,000 km (86,500 mi) in space.
              </p>
              <a target="_blank" href="https://chandra.harvard.edu">
                {" "}
                Source: Chandra Site, NASA
              </a>
            </Col>
            <Col>
              <p>Chandra Image</p>
            </Col>
          </Row>
          <h2>Spitzer Space Telescope</h2>
          <Row>
            <Col>
              <p>
                The Spitzer Space Telescope is the final mission in NASA's Great
                Observatories Program - a family of four space-based
                observatories, each observing the Universe in a different kind
                of light. Spitzer is designed to detect infrared radiation,
                which is primarily heat radiation. It is comprised of two major
                components:{" "}
                <ul>
                  <li>
                    The Cryogenic Telescope Assembly, which contains the a 85
                    centimeter telescope and Spitzer's three scientific
                    instruments
                  </li>{" "}
                  <li>
                    The Spacecraft, which controls the telescope, provides power
                    to the instruments, handles the scientific data and
                    communicates with Earth
                  </li>
                </ul>
              </p>
              <p>
                Spitzer was originally built to last for a minimum of 2.5 years,
                but it lasted in the cold phase for over 5.5 years. On May 15,
                2009 the coolant was finally depleted and the Spitzer "warm
                mission" began. Operating with 2 channels from one of its
                instruments called IRAC, Spitzer can continue to operate until
                late in this decade.
              </p>
              <a target="_blank" href="http://www.spitzer.caltech.edu">
                {" "}
                Source: Spitzer Site, NASA
              </a>
            </Col>
            <Col>
              <p>Spiter Image</p>
            </Col>
          </Row>
          <h2>Compton Gamma Ray Observatory</h2>
          <Row>
            <Col>
              <p>
                The Compton Gamma Ray Observatory was the second of NASA's Great
                Observatories. Compton, at 17 tons, was the heaviest
                astrophysical payload ever flown at the time of its launch on
                April 5, 1991 aboard the space shuttle Atlantis. Compton was
                safely deorbited and re-entered the Earth's atmosphere on June
                4, 2000.
              </p>
              <a
                target="_blank"
                href="https://heasarc.gsfc.nasa.gov/docs/cgro/index.html"
              >
                {" "}
                Source: CGRO Site, NASA
              </a>
              <p>
                The Compton Gamma Ray Observatory (GRO) is a sophisticated
                satellite observatory dedicated to observing the high-energy
                Universe. It is the second in NASA's program of orbiting "Great
                Observatories", following the Hubble Space Telescope. While
                Hubble's instruments operate at visible and ultraviolet
                wavelengths, Compton carries a collection of four instruments
                which together can detect an unprecedented broad range of
                high-energy radiation called gamma rays
              </p>
              <a
                target="_blank"
                href="hhttps://heasarc.gsfc.nasa.gov/docs/cgro/cgro/"
              >
                {" "}
                Source: CGRO Site, NASA
              </a>
            </Col>
            <Col>
              <p>CGR Image </p>
            </Col>
          </Row>
        </Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Telescopes;
