import React from "react";
import "./Weather.css";
import apiKey from './ApiKeyMeteo';


import Search from "./Search";


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
    };
  }
 
  getWeather = async (e) => {
    e.preventDefault();
    

    const city = e.target.elements.city.value;


  if (city) {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const response = await apiCall.json();
    this.setState({ response: response });
    this.props.passCity(this.state.response.name);
    this.props.passIcon(this.state.response.weather[0].icon)
  } else {
    this.setState({ response: "error" });
  }
};

  calcCelsius(temp) {
    let cels = Math.floor(temp - 273.15);
    return cels;
  }
  render() {
    return (
      <div className="containerMeteo">
        <div className="poulet"></div>
        <Search
          loadweather={this.getWeather}
          error={this.state.response === "error"}
          passFilterAdult={this.props.passFilterAdult}
          filterAdult={this.props.filterAdult}
          passFilterRelig={this.props.passFilterRelig}
          filterRelig={this.props.filterRelig}
          passFilterRest={this.props.passFilterRest}
          filterRest={this.props.filterRest}
          passFilterSport={this.props.passFilterSport}
          filterSport={this.props.filterSport}
          passFilterShop={this.props.passFilterShop}
          filterShop={this.props.filterShop}
        />
        {this.state.response.weather ? (
          <div className="barMeteo">
            <div className="iconAndDescription">
              <span className="meteoIcon">
                <img
                  src={`http://openweathermap.org/img/wn/${this.state.response.weather[0].icon}.png`}
                  
                  className={this.state.response.weather[0].icon}
                  id="iconMeteo"
                  alt={this.state.response.weather[0].description}
                />
                
              </span>
            </div>
            <div className="cityAndDeg">
              <p className="cityMeteo">{this.state.response.name}</p>
              <p className="descriptionMeteo">
                {this.state.response.weather[0].description}
              </p>
              <span className="temperatureMeteo">
                {this.calcCelsius(this.state.response.main.temp)}&deg;
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
