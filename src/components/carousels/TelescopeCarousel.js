import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import UranusClouds from "../../images/telescope/brightcloudsuranusbyhubble.jpg";
import Celestialfirework from "../../images/telescope/CelstialFireworksbyhubble.jpg";
import Deadstar from "../../images/telescope/deadstarlayersbyspitzer.jpg";
import InflatingStar from "../../images/telescope/inflatingstarbyhubble.jpg";
import MysticMountain from "../../images/telescope/MysticMountainbyHubble.jpg";
import PandoraCluster from "../../images/telescope/PandoraClusterbySpitzer.jpg";
import CrabNebula from "../../images/telescope/crabnebulabychandra.jpg";
import SagittariusA from "../../images/telescope/SagittariusAbyChandra.jpg";
import DeadstarSharpenal from "../../images/telescope/ShrapnelfromanExplodedStar.jpg";
import Twins from "../../images/telescope/TwinsbySpitzer.jpg";
import TychoSupernova from "../../images/telescope/TychoSupernovaRemnantbySpitzer+Chandra.jpg";
import StarBubble from "../../images/telescope/starbubblebyhubble.jpg";
import Supernova from "../../images/telescope/Supernovabyhubble.jpg";
import RoseofGalaxies from "../../images/telescope/roseofglaxiesbyhubble.jpg";
import Webbmirror from "../../images/telescope/webbmirror.jpg";
import Webb from "../../images/telescope/webb.jpg";

function TelescopeCarousel() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Webb}
            alt="James Webb Telescope"
          />
          <Carousel.Caption>
            <h3>James Webb Telescope</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Webbmirror}
            alt="James Webb Mirror with man infront"
          />
          <Carousel.Caption>
            <h3>James Webb Mirror</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Deadstar}
            alt="Dead Star Layers By Spitzer"
          />
          <Carousel.Caption>
            <h3>Dead Star Layer by Spitzer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={MysticMountain}
            alt="Timeline for Artemis Program"
          />
          <Carousel.Caption>
            <h3>Mystic Mountain by Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Celestialfirework}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Celestial Fireworks by Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={PandoraCluster}
            alt="Pandora Cluster by Spitzer"
          />

          <Carousel.Caption>
            <h3>Pandora Cluster by Spitzer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={UranusClouds}
            alt="Bright red clouds on Uranus"
          />

          <Carousel.Caption>
            <h3>Bright Clouds capture on Uranus by Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={InflatingStar}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Inflating Star ny Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={SagittariusA}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Sagittarius A by Chandra</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={CrabNebula}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Crab Nebula By Chandra</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={StarBubble}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Star Bubble by Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Twins}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Twins by Spitzer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={DeadstarSharpenal}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Dead Star Sharpenal by Spitzer</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={RoseofGalaxies}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Rose of Galaxies by Hubble</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={TychoSupernova}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Tycho Supernova Remnant by Spitzer and Chandra</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Supernova}
            alt="Timeline for Artemis Program"
          />

          <Carousel.Caption>
            <h3>Supernova by Hubble</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default TelescopeCarousel;
