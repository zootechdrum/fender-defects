import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#login">Administrator Access</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
