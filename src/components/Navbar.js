/**
 * File name: Navbar.js
 * Student's Name: Lenard Alexis Martinez
 * Student ID: 301409210
 * Date: 05/22/24
 */

/**
Note: classNames such as [main, d-grid, justify-content-center, align-items-center,
align-content-center, text-center, mx-[i], my-[i] commonly used in pages. 
These are Bootstrap classes and utilities that enhance convenience.
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import logo from "../images/my_logo.png";
import { Link } from "react-router-dom";

// Navbar component
const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Row>
              <Col xs={6} md={4}>
                <Image src={logo} width="100" height="60" />
              </Col>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"} className="nav-link"> Home </Link>
              <Link to={"/about"} className="nav-link">About Me </Link>
              <Link to={"/projects"} className="nav-link"> Projects </Link>
              <Link to={"/services"} className="nav-link"> Services </Link>
              <Link to={"/contact"} className="nav-link"> Contact Me </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
