import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/AEDMS.svg";
import vector from "../../assets/Vector.svg";

import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-body-light">
        <Navbar.Brand href="#" className="d-flex gap-2 align-items-center">
          <img src={Logo} className="image-class" />
          <b> AEDMS</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end align-items-center flex-grow-1 me-5">
              <div>
                <img src={vector} className="vector-image-class" />
              </div>
              <NavDropdown title="Ao" id={`offcanvasNavbarDropdown-expand-sm`}>
                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
