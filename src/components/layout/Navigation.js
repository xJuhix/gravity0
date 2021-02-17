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
import Telescopes from "../pages/Telescopes";
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
					<NavLink to="/event" className="nav__link">
              Telescopes
            </NavLink>
          <NavDropdown
						title="Programs"
						to="/programs"
						className="nav__link"
						id="collasible-nav-dropdown"
					>
						<NavDropdown.Item href="#action/3.1" className="dropdown__item">ISS</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2" className="dropdown__item">Mars</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3" className="dropdown__item">
							Moon to Mars
						</NavDropdown.Item>
          </NavDropdown>
					<NavDropdown
						title="Live Feeds"
						to="/livefeeds"
						className="nav__link"
						id="collasible-nav-dropdown"
					>
						<NavDropdown.Item href="#action/3.1" className="dropdown__item">Space</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2" className="dropdown__item">Telescope</NavDropdown.Item>
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
        <Route path="/missions" component={Telescopes} />
        <Route path="/programs" component={Programs} />
        <Route path="/livefeeds" component={LiveFeeds} />
        <Route path="/events" component={Events} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}
export default Navigation;
