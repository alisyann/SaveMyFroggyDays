import React, { useState } from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";
import Filter from "./Filter";
import Picker from "./Picker";
import Weatherbis from "./Weatherbis"
import Weather from "./Weather"

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      cityName: "",
      show: false,
      showwhen: false,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }
  getCoordinates(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    const apiKey = "9d986c82c3977e89a2551fa521df3cb1";
    const city = fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`,
    )
      .then((res) => res.json())
      .then((res) => this.setState({ cityName: res.name }));
  }
  handleChange(event) {
    this.setState({ cityName: event.target.value });
  }

  render() {
    return (
      <div id="searchFunction">
        <p className="discoverActivity">Discover Your Activity</p>
        <p className="descriptionDiscover">
          Even if the weather is bad, there is an activity for you!
        </p>

        <div>{this.props.error ? error() : null}</div>
        <form className="formInput" onSubmit={this.props.loadweather}>
          <div className="inputSearchBar">
            <div className="locationSearchBar">
              <input
                id="city"
                type="text"
                placeholder="City"
                value={this.state.cityName}
                onChange={this.handleChange}
              ></input>
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
                onChange={() =>
                  this.setState({ showwhen: !this.state.showwhen })
                }
              />
            </div>

            <div id="filterDescription">
              <p id="textFilter"> Categories</p>
              <img
                src={Img}
                alt="setting"
                id="setting"
                onClick={() => this.setState({ show: !this.state.show })}
              ></img>
            </div>
          </div>
          {this.state.showwhen ? 
          <Weatherbis passCity={this.props.passCity} />
          : <Weather passCity={this.props.passCity} />}
          {this.state.show ? <Filter /> : null}
          <button type="submit" id="send">
            {" "}
            Search
          
          </button>
          <div className="errorWeather">
            {this.props.error ? error() : null}
          </div>
        </form>
      </div>
    );
  }
}
function error() {
  return "Please enter city! 🐸";
}

export default Search;

