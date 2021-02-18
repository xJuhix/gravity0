/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { ISS_LOCATION } from "../../constants/api";

function IssLocation() {
  const [iss, setIss] = useState(null);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ISS_LOCATION)
      .then((response) => response.json())
      .then((json) => {
        setIss(json);
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
        {iss && (
          <>
            <p>Latitude: {iss.iss_position.latitude}</p>
            <p>Logitude: {iss.iss_position.longitude}</p>
          </>
        )}
      </div>
    </>
  );
}

export default IssLocation;
