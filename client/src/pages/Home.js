import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { DropdownButton, Dropdown } from "react-bootstrap";
import TableComp from "../components/Table";
import Container from "../components/Container";
import NavBar from "../components/NavBar/NavBar";
import Search from "../components/SearchBox";
import API from "./utils/API";
import imgData from "./utils/imgArray";

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

  //Implements when arrow should show up
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    loadDefects();
  }, []);

  function loadDefects() {
    API.getDefects().then((res) => combineImgWithErrCode(res.data));
    // .catch((err) => console.log(err));
  }
  function combineImgWithErrCode(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < imgData.data.initData.length; j++) {
        if (arr[i].errorCode === imgData.data.initData[j].defectCode) {
          arr[i].image = imgData.data.initData[j].image;
        }
      }
      setDefects(arr);
    }
  }

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

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
        <div>
          <NavBar />
        </div>
        <Hero>
          <img src={FenderLogo} alt="Fender Logo" />
        </Hero>
      </div>
      <Container style={{ marginTop: 20 }}>
        <div className="mt-2">
          <div class="row">
            <div class="col">
              <div className="text-center">
                <Search change={handleChange} />
                <div className="mt-5">
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
                    <Dropdown.Item eventKey="Electronics">
                      Electronics
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Finish">Finish</Dropdown.Item>
                    <Dropdown.Item eventKey="Body">Body</Dropdown.Item>
                    <Dropdown.Item eventKey="Hardware">Hardware</Dropdown.Item>
                    <Dropdown.Item eventKey="Neck">Neck</Dropdown.Item>
                    <Dropdown.Item eventKey="Nut">Nut</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              <div className="mt-5">
                <TableComp
                  defects={
                    filteredCodes.length !== defects.length
                      ? filteredCodes
                      : filteredComponents
                  }
                />
                <div>
                  <FontAwesomeIcon
                    className="fixed-btm fontIcon bounce"
                    onClick={scrollTop}
                    style={{ display: showScroll ? "flex " : "none" }}
                    icon={faArrowAltCircleUp}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <FontAwesomeIcon
          className="fixed-btm fontIcon bounce"
          onClick={scrollTop}
          style={{ display: showScroll ? "flex " : "none" }}
          icon={faArrowAltCircleUp}
        />
      </div>
    </div>
  );
}

export default Home;
