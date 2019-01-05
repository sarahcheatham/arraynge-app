import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  console.log(props)
  return (
    <Navbar inverse collapseOnSelect className="navie">
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut} className="signoutButton">Sign Out</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem><Link to="/secret" className="secret">Secret</Link></NavItem>
          {/* <Navbar.Text><Link to="/secret" className="secret">Secret</Link></Navbar.Text> */}
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
