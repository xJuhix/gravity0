/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { FaCalendarDay } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { APOD } from "../../constants/api";
import Heading from "../layout/Heading";

function NasaDailyImage() {
  const [image, setImage] = useState(null);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(APOD)
      .then((response) => response.json())
      .then((json) => {
        setImage(json);
        console.log(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (hasError) {
    return <Alert variant="warning" className="erroralert" />;
  }
  if (loading) {
    return (
      <Spinner
        role="status"
        animation="border"
        className="spinner"
        variant="info"
      />
    );
  }
  return (
    <>
      <div className="image">
        {image && (
          <>
            <Container>
              <Heading title={image.title} />
              <Row>
                <Col>
                  <Image src={image.url} width="100%" className="Nasa-APOD" />
                </Col>
                <Col>
                  <p>{image.explanation}</p>

                  <p>
                    <span>
                      <FaCalendarDay />
                    </span>{" "}
                    {image.date}, copyright: {image.copyright}
                  </p>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    </>
  );
}

export default NasaDailyImage;
