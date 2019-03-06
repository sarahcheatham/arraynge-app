import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let whatToShow = "";
  if(props.showNavItems === false){
    whatToShow = "Sign In"
  } else {
    whatToShow = "Sign Out"
  }
  console.log("props:", props.showNavItems)
  return (
    <Navbar inverse className="navie">
        <Nav>
          <NavItem onClick={props.onSignOut} className="signoutButton">{whatToShow}</NavItem>
        </Nav>
        <Nav>
            <Link to="/" className="secret"><Navbar.Text>Home</Navbar.Text></Link>
        </Nav>
        <Nav>
            <Link to="/scores" className="secret"><Navbar.Text>Edit Scores</Navbar.Text></Link>
        </Nav>
        <Nav>
            <Link to="/arrayngement" id="longword" className="secret"><Navbar.Text>Arraynge</Navbar.Text></Link>
        </Nav>
        <Nav>
          <Link to="/charts" className="secret"><Navbar.Text>View Charts</Navbar.Text></Link>
        </Nav>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
