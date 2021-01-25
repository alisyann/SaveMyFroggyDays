import React from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";
const Search = () => {
  return (
    <div id="searchFunction">
      <div id="filterInput">
      <button id="filter">
        <img src={Img} alt="logo setting" id="setting" />
      </button>
      
      <input id="city" type="text" placeholder="Where are you ?"></input>
      </div>
      <button onClick={console.log("ok")} id="search">
        <img src={Image} alt="logo search" id="searchLogo"></img>
        <p id="send">Search</p>
      </button>
    </div>
  );
};
export default Search;
