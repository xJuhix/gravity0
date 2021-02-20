/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import { LAUNCHES } from "../../constants/api";

function Launch(props) {
  const [launches, setLaunches] = useState(null);
  const takeoff = props.launch;

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    fetch(LAUNCHES)
      .then((response) => response.json())
      .then((json) => {
        setLaunches(json.results);
      })
      .catch((error) => {
        console.log(error);
      });

    setInterval(() => {
      const diff = new Date(takeoff.net) - new Date();
      setTimer({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
  }, []);
  return (
    <div className="launch">
      {launches && (
        <>
          {launches.map((launch) => (
            <Col launch={launch} key={launch.name}>
              <img
                className="d-block launch-image"
                alt="Launch image of rocket"
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
            </Col>
          ))}
        </>
      )}
    </div>
  );
}

export default Launch;
