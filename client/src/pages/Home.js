import React from "react";
import Hero from "../components/Hero";
import { DropdownButton, Dropdown } from "react-bootstrap";
import TableComp from "../components/Table";
import Container from "../components/Container";
import Search from "../components/SearchBox";
import "./Home.css";

import FenderLogo from "../images/Fender_logo.png";

function Home() {
  // const [component, setComponent] = useState([]);

  return (
    <div>
      <Hero>
        <img src={FenderLogo} alt="Fender Logo" />
      </Hero>
      <Search />
      <Container style={{ marginTop: 50 }}>
        <div className="text-center">
          <DropdownButton id="dropdown-button" title="Filter by Component">
            <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Finish</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Body</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Hardware</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Neck</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Nut</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Acoustic</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="mt-5">
          <TableComp />
        </div>
      </Container>
    </div>
  );
}

export default Home;
