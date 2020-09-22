import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { DropdownButton, Dropdown } from "react-bootstrap";
import TableComp from "../components/Table";
import Container from "../components/Container";
import Search from "../components/SearchBox";
import API from "./utils/API";
import "./Home.css";

import FenderLogo from "../images/Fender_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [defects, setDefects] = useState([]);
  //Filters by search
  const [searchField, setsearchField] = useState([]);
  //Filters by dropdown options
  const [filterComponent, setFilterComponent] = useState([]);

  useEffect(() => {
    loadDefects();
  }, []);

  function loadDefects() {
    API.getDefects()
      .then((res) => setDefects(res.data))
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    setFilterComponent([]);
    setsearchField(e.target.value);
  };

  const handleSelect = (e) => {
    console.log(e);
    if (e === "Reset") {
      return setFilterComponent([]);
    }
    setFilterComponent(e);
    setsearchField([]);
    filteredCodes = [];
  };

  let filteredCodes = defects.filter((defect) =>
    defect.errorCode.toString().includes(searchField)
  );

  const filteredComponents = defects.filter((defect) =>
    defect.component.includes(filterComponent)
  );
  return (
    <div>
      <div className="text-center">
        <Hero>
          <img src={FenderLogo} alt="Fender Logo" />
        </Hero>
        <Search change={handleChange} />
      </div>
      <Container style={{ marginTop: 20 }}>
        <div className="text-center">
          <DropdownButton
            id="dropdown-button"
            title={
              filterComponent.length === 0
                ? "Choose Component"
                : filterComponent
            }
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Reset">Reset</Dropdown.Item>
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
          <TableComp
            defects={
              filteredCodes.length !== defects.length
                ? filteredCodes
                : filteredComponents
            }
          />
        </div>
      </Container>
      <FontAwesomeIcon icon={faArrowAltCircleUp} />
    </div>
  );
}

export default Home;
