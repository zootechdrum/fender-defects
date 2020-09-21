import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div class="row">
    <div class="col">
    <div class="searchBox mt-5">
      <input
        onChange={props.change}
        type="text"
        class="input"
        placeholder="Search Error Code"
      />
      <input type="button" value="search" class="close-btn" />
    </div>
    </div>
    </div>
  );
}

export default Search;
