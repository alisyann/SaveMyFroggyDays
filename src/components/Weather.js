import React from "react";
import "./Weather.css";

import Search from "./Search";


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
    };
  }

/* getWeather = async (e) => {
    e.preventDefault();
    const apiKey = "9d986c82c3977e89a2551fa521df3cb1";

    const city = e.target.elements.city.value;


  if (city) {
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const response = await apiCall.json();
    this.setState({ response: response });
    this.props.passCity(this.state.response.name);
  } else {
    this.setState({ response: "error" });
  }
};*/

  calcCelsius(temp) {
    let cels = Math.floor(temp - 273.15);
    return cels;
  }
  render() {
    
    return (
      <div className="containerMeteo">
       {/* <Search
          loadweather={this.getWeather}
          error={this.state.response === "error"}
       />*/}
        {this.props.response? (
          <div className="barMeteo">
            <div className="iconAndDescription">
              <span className="meteoIcon">
                <img
                  src={`http://openweathermap.org/img/wn/${this.props.response.weather[0].icon}.png`}
                  className={this.props.response.weather[0].icon}
                  id="iconMeteo"
                  alt={this.props.response.weather[0].description}
                />
              </span>
            </div>

            <div className="cityAndDeg">
              <p className="cityMeteo">{this.props.response.name}</p>
              <p className="descriptionMeteo">
                {this.props.response.weather[0].description}
              </p>
              <span className="temperatureMeteo">
                {this.calcCelsius(this.props.response.main.temp)}&deg;
              </span>
            </div>
          </div>
        ) : null}
        
      </div>
    );
  }
}

export default Weather;
