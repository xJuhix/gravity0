/* eslint-disable import/no-named-as-default */
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../pages/Home";
import Telescopes from "../pages/Telescopes";
import Programs from "../pages/Programs";
import Events from "../pages/Events";
import Iss from "../pages/Iss";
import Mars from "../pages/Mars";
import MoontoMars from "../pages/MoonToMars";
import Search from "../pages/Search";
import logo from "../../images/logo.png";

function Navigation() {
  return (
    <Router>
      <Navbar className="nav" expand="xl">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img
              src={logo}
              className="d-inline-block align-top nav__brand"
              alt="Gravity0 logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav__item">
            <NavLink to="/telescopes" className="nav__link">
              Telescopes
            </NavLink>
            <NavLink to="/iss" className="nav__link">
              ISS
            </NavLink>
            <NavLink to="/mars" className="nav__link">
              Mars
            </NavLink>
            <NavLink to="/moontomars" className="nav__link">
              Moon to Mars
            </NavLink>
            <NavLink to="/events" className="nav__link">
              Events
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path="/telescopes" component={Telescopes} />
        <Route path="/porgrams" component={Programs} />
        <Route path="/iss" component={Iss} />
        <Route path="/mars" component={Mars} />
        <Route path="/moontomars" component={MoontoMars} />
        <Route path="/events" component={Events} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
export default Navigation;
