import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect className="navie">
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut} className="signoutButton">Sign Out</NavItem>
        </Nav>
        <Nav pullRight>
          <Link to="/secret" className="secret"><Navbar.Text>Secret</Navbar.Text></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
