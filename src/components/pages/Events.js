/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";

export function InternationalSpaceStation() {
  return (
    <>
      <Helmet>
        <title>Space Events</title>
        <meta name="description" content="The International Space Station." />
      </Helmet>

      <div className="Events">
        <Col>
          <Row>
            <Col>
              <Heading title="Upcoming Events" />
            </Col>
            <Col>
              <Heading title="Launches" />
            </Col>
          </Row>
        </Col>
      </div>
    </>
  );
}

export default InternationalSpaceStation;
