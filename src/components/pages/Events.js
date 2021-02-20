/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import { LAUNCHES, EVENTS } from "../../constants/api";
import Launch from "../events/Launch";

export function InternationalSpaceStation() {
  const [launches, setLaunches] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch(LAUNCHES)
      .then((response) => response.json())
      .then((json) => {
        setLaunches(json.results);
      })
      .catch((error) => {
        console.log(error);
      });
    fetch(EVENTS)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        setEvents(json.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Space Events</title>
        <meta name="description" content="The International Space Station." />
      </Helmet>

      <div className="Events">
        <Col>
          <Row>
            <Col>
              <Heading title="Upcoming Events" />
              <div className="events">
                {launches && (
                  <>
                    {events.map((event) => (
                      <div className="event" key={event.name}>
                        <img src={`${event.feature_image}`} />
                        <div className="event-info">
                          <div className="event-minor">
                            <span>{event.type.name}</span>
                            {`${new Date(event.date).toLocaleDateString(
                              "en-gb",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "utc",
                              }
                            )},
									   ${Intl.DateTimeFormat("en", { hour: "numeric" })
                       .format(new Date(event.date))
                       .toString()}`}
                          </div>
                          <a className="event-title" href={`${event.news_url}`}>
                            {event.name}
                          </a>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
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
        </Col>
      </div>
    </>
  );
}

export default InternationalSpaceStation;
