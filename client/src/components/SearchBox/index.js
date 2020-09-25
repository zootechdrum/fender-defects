import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="searchBox text-center mt-5">
          <input
            onChange={props.change}
            type="text"
            className="input"
            placeholder="Search Error Code"
          />
          <input type="button" value="search" className="close-btn" />
        </div>
      </div>
    </div>
  );
}

export default Search;
