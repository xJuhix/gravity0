/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { ISS_ASTROS } from "../../constants/api";

function IssAstros() {
  const [astros, setAstros] = useState(null);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ISS_ASTROS)
      .then((response) => response.json())
      .then((json) => {
        setAstros(json);
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
        {astros && (
          <>
            <p>Number: {astros.number}</p>
            <p>Who: {astros.people.name}</p>
          </>
        )}
      </div>
    </>
  );
}

export default IssAstros;
