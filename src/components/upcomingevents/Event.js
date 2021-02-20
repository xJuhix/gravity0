/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
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
              <div className="event" key={event.name}>
                <img src={`${event.feature_image}`} />
                <div className="event-info">
                  <div className="event-minor">
                    <span>{event.type.name}</span>
                    {`${new Date(event.date).toLocaleDateString("en-gb", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      timeZone: "utc",
                    })},
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
    </>
  );
}

export default Events;
