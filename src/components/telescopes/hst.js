/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HubbleImage from "./hubbleimage";

export function HubbleSpaceTelescope() {
  return (
    <>
      <div className="telescope">
        <Row>
          <Col md={12} lg={6}>
            <div className="telescope__information">
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
            </div>
          </Col>
          <Col md={12} lg={6}>
            <HubbleImage />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HubbleSpaceTelescope;
