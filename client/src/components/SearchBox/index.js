import React from "react";
import "./style.css";

function Search() {
  return (
    <div class="searchBox mt-5">
      <input type="text" class="input" placeholder="Search Error Code" />
      <input type="button" value="search" class="close-btn" />
    </div>
  );
}

export default Search;
