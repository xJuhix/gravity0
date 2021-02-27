/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import Launch from "../upcomingevents/Launch";
import Event from "../upcomingevents/Event";
import { LAUNCHES } from "../../constants/api";

function UpcomingEvents() {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    fetch(LAUNCHES)
      .then((response) => response.json())
      .then((json) => {
        setLaunches(json.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>Events | Launches</title>
        <meta
          name="description"
          content="Upcoming space events and launches from all over the world"
        />
      </Helmet>

      <div className="Events">
        <Row>
          <Col>
            <Heading title="Events" />
            <Event />
          </Col>
          <Col>
            <Heading title="Launches" />
            <div className="launches">
              {launches && (
                <>
                  {launches.map((launch) => (
                    <Launch launch={launch} key={launch.name} />
                  ))}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UpcomingEvents;
