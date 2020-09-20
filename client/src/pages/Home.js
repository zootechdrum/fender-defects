import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { DropdownButton, Dropdown } from "react-bootstrap";
import TableComp from "../components/Table";
import Container from "../components/Container";
import Search from "../components/SearchBox";
import API from "./utils/API";
import "./Home.css";

import FenderLogo from "../images/Fender_logo.png";

function Home() {
  const [defects, setDefects] = useState([]);
  const [searchField, setsearchField] = useState([]);

  useEffect(() => {
    loadDefects();
  }, []);

  function loadDefects() {
    API.getDefects()
      .then((res) => setDefects(res.data))
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    setsearchField(e.target.value);
  }

  const handleSelect = (e) => {
    console.log(e);
  };

  const filteredCodes = defects.filter((defect) =>
    defect.errorCode.toString().includes(searchField)
  );

  return (
    <div>
      <Hero>
        <img src={FenderLogo} alt="Fender Logo" />
      </Hero>
      <Search change={handleChange} />
      <Container style={{ marginTop: 50 }}>
        <div className="text-center">
          <DropdownButton
            id="dropdown-button"
            title="Filter by Component"
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Electronics">Electronics</Dropdown.Item>
            <Dropdown.Item eventKey="Finish">Finish</Dropdown.Item>
            <Dropdown.Item eventKey="Body">Body</Dropdown.Item>
            <Dropdown.Item eventKey="Hardware">Hardware</Dropdown.Item>
            <Dropdown.Item eventKey="Neck">Neck</Dropdown.Item>
            <Dropdown.Item eventKey="Nut">Nut</Dropdown.Item>
            <Dropdown.Item eventKey="Acoustic">Acoustic</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="mt-5">
          <TableComp defects={filteredCodes} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
