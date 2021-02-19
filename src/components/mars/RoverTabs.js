import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function RoverTabs() {
  return (
    <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
      <Tab eventKey="one" title="Curiosity">
        About Curiosity
      </Tab>
      <Tab eventKey="two" title="ExoMars">
        About ExoMars
      </Tab>
      <Tab eventKey="three" title="Preseverance">
        About Preseverance
      </Tab>
    </Tabs>
  );
}

export default RoverTabs;
