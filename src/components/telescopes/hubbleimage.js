/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router-dom";
import { HUBBLE } from "../../constants/api";

function HubbleImage() {
  const [hubble, setHubble] = useState(null);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url = `${HUBBLE}/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setHubble(json);
        console.log(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

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
      <div className="hubble-image">
        {hubble && (
          <>
            <div>
              <Container>
                <h3 className="hubble__name">{hubble.name}</h3>
                <Col>
                  <Image
                    src={hubble.image_file.file_url}
                    width="100%"
                    className="hubble-img"
                  />
                </Col>
              </Container>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HubbleImage;
