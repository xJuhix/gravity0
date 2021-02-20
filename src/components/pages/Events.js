/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import { Helmet } from "react-helmet";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Heading from "../layout/Heading";
import Launch from "../upcomingevents/Launch";
import Event from "../upcomingevents/Event";

function UpcomingEvents() {
  return (
    <>
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
              <Launch />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UpcomingEvents;
