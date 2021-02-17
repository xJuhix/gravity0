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
        <Row>
          <Col>
            <Heading title="Hubble" />
          </Col>
          <Col>
            <Heading title="James Webb" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Books;
