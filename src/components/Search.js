import React from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";
const Search = () => {
  return (
    <div id="searchFunction">
      <button id="filter">
        <img src={Img} alt="logo setting" id="setting" />
      </button>
      <input id="city" type="text" placeholder="Where are you ?"></input>
      <button onClick={console.log("ok")} id="send">
        <img src={Image} alt="logo search" id="search"></img>
      </button>
    </div>
  );
};
export default Search;
