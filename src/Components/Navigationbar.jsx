import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BsFillHouseDoorFill,
  BsPeopleFill,
  BsPersonPlusFill,
} from "react-icons/bs";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Student Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>
              <BsFillHouseDoorFill className="icon" /> Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/student-list">
              <BsPeopleFill className="icon" /> Student List
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registration">
              <BsPersonPlusFill className="icon" /> Registration
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
