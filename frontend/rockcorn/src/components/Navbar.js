import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import "./Navbar.css";

class Topbar extends React.Component {
  render() {
    return (
      <Navbar bg="#FFFFFF" expand="lg">
        <Navbar.Brand href="/">
          <img src={"././rockcorn_logo.png"}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Help</Nav.Link>
            <Nav.Link href="/">About us</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Topbar;
