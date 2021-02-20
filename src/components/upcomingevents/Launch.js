/* eslint-disable no-console */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import Event from "./Event";
import { LAUNCHES } from "../../constants/api";

function Launch(props) {
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
  /* Launch */
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { launch } = props;
  useEffect(() => {
    setInterval(() => {
      const diff = new Date(launch.net) - new Date();
      setTimer({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <Helmet>
          <title>Space Events</title>
          <meta name="description" content="The International Space Station." />
        </Helmet>

        <div className="Events">
          <Row>
            <Col>
              <Heading title="Upcoming Events" />
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
      </div>
      <div className="launch">
        <div
          className="d-block launch-image"
          style={{ backgroundImage: `url(${launch.image})` }}
        />
        <div className="launch-info">
          <h3>{launch.mission ? launch.mission.name : launch.name}</h3>
          <h4 className="launch-countdown">{`T- ${timer.days} : ${timer.hours} : ${timer.minutes} : ${timer.seconds}`}</h4>
          <h6 className="launch-countdown">{`${new Date(
            launch.net
          ).toLocaleDateString("en-gb", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "utc",
          })},
									 ${Intl.DateTimeFormat("en", { hour: "numeric" })
                     .format(new Date(launch.net))
                     .toString()}`}</h6>
          <p>
            {launch.mission
              ? launch.mission.description
              : "Mission description not found"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Launch;
