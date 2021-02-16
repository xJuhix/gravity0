import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../pages/Home";
import Missions from "../pages/Missions";
import Programs from "../pages/Programs";
import LiveFeeds from "../pages/LiveFeeds";
import Events from "../pages/Events";
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
            <NavDropdown
              title="Missions"
              to="/missions"
              className="nav__link"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Hubble</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">James Webb</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Space X</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Programs"
              to="/programs"
              className="nav__link"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">ISS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Moon to Mars
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Live Feeds"
              to="/livefeeds"
              className="nav__link"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Space</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Telescope</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/event" className="nav__link">
              Events
            </NavLink>
            <NavLink to="/search" className="nav__link">
              Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path={["/", "/home"]} exact component={Home} />
        <Route path="/missions" component={Missions} />
        <Route path="/programs" component={Programs} />
        <Route path="/livefeeds" component={LiveFeeds} />
        <Route path="/events" component={Events} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
export default Navigation;
