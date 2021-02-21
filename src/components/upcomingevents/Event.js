/* eslint-disable no-console */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { EVENTS } from "../../constants/api";

function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
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
      <div className="events">
        {events && (
          <>
            {events.map((event) => (
              <Col>
                <div className="event" key={event.name}>
                  <img src={`${event.feature_image}`} />
                  <div className="event-info">
                    <Row className="event-minor">
                      <Col>
                        <p className="event-type">{event.type.name}</p>
                      </Col>
                      <Col>
                        <p>
                          {`${new Date(event.date).toLocaleDateString("en-gb", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "utc",
                          })}
									  			`}
                        </p>
                      </Col>
                    </Row>
                    <a className="event-title" href={`${event.news_url}`}>
                      <h3>{event.name}</h3>
                    </a>
                    <p>{event.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Events;
