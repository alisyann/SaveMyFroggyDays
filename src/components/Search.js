import React, { useState } from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Filter from "./Filter";
import When from "./When";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

const Search = (props) => {
  const [show, setShow] = useState(false);
  const [showwhen, setShowwhen] = useState(false);
  const filters = [
    {
      checked: props.filterAdult,
      filterName: "Adult",
      filterPic: <AiIcons.AiFillHome />,
      passChecked: props.passFilterAdult,
    },
    {
      checked: props.filterRest,
      filterName: "Food",
      filterPic: <BiIcons.BiRestaurant />,
      passChecked: props.passFilterRest,
    },
    {
      checked: props.filterRelig,
      filterName: "Religion",
      filterPic: <BiIcons.BiChurch />,
      passChecked: props.passFilterRelig,
    },
    {
      checked: props.filterShop,
      filterName: "Shopping",
      filterPic: <AiIcons.AiFillShopping />,
      passChecked: props.passFilterShop,
    },
    {
      checked: props.filterSport,
      filterName: "Sport",
      filterPic: <BiIcons.BiRun />,
      passChecked: props.passFilterSport,
    },
  ];
  return (
    <div id="searchFunction">
      <p className="discoverActivity">Discover Your Activity</p>
      <p className="descriptionDiscover">
        Even if the weather is bad, there is an activity for you!
      </p>
      <form className="formInput" onSubmit={props.loadweather}>
        <div className="inputSearchBar">
          <div className="locationSearchBar">
            <input id="city" type="text" placeholder="City"></input>
          </div>

          <div className="when">
            {" "}
            <span className="letsGo">LET'S GO!</span>
            <p>Now</p>
            <input id="now" type="checkbox" />
            <p>Later</p>
            <input
              id="later"
              type="checkbox"
              onChange={() => setShowwhen(!showwhen)}
            />
          </div>

          <div id="filterDescription">
            <p id="textFilter"> Categories</p>
            <img
              src={Img}
              alt="setting"
              id="setting"
              onClick={() => setShow(!show)}
            ></img>
          </div>
        </div>
        {showwhen ? <When /> : null}
        {show ? (
          <ul>
            {filters.map((f, i) => (
              <Filter
                key={f.filterName + i}
                checked={f.checked}
                filterName={f.filterName}
                filterPic={f.filterPic}
                passChecked={f.passChecked}
              />
            ))}
          </ul>
        ) : null}
        <button type="submit" id="send">
          Search
          {/* <img src={Image} alt="logo search" id="search"></img> */}
        </button>
        <div className="errorWeather">{props.error ? error() : null}</div>
      </form>
    </div>
  );
};

function error() {
  return "Please enter city! 🐸";
}

export default Search;
