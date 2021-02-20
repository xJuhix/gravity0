/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { HUBBLE, HUBBLE_IMAGES } from "../../constants/api";

function HubbleImage() {
  const [hubble, setHubble] = useState(null);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = `${HUBBLE}`;
  const hubble_images = `${HUBBLE_IMAGES}`;

  useEffect(() => {
    fetch(hubble_images, {
      mode: "cors",
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
      .then((json) => {
        return json[0].id;
      })
      .then((id) => {
        fetch(url + id, {
          mode: "cors",
          headers: { "Access-Control-Allow-Origin": "*" },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("JSON JSON");
            console.log(json);
            setHubble(json);
            console.log("JSON JSON");
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => setLoading(false));
      })
      .catch((error) => {
        setError(error);
      });
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
                    src={hubble.image_files[0].file_url}
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
