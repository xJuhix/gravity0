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
    setInterval(function () {
      fetch(ISS_ASTROS)
        .then((response) => response.json())
        .then((json) => {
          setAstros(json);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    }, 15000);
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
      <div className="live__iss">
        {astros && (
          <>
            <p>There are {astros.number} astronauts</p>
            <ul>
              {astros.people.map((astronauts) => (
                <li key={astronauts.name}>{astronauts.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default IssAstros;
