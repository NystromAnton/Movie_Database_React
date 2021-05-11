import Card from "react-bootstrap/Card";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import React from "react";
import axios from "axios";
import CustomButton from "./CustomButton";

class Topbar extends React.Component {
    render () {
        return (
            <Navbar bg="#FFFFFF" expand="lg">
            <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">About us</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>        
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Topbar;