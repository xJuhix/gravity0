/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

function Launch(props) {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const launch = props.launch;
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
  );
}

/* launch.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  net: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}; */

export default Launch;
