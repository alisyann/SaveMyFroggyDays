import React from "react";
import "./Weather.css";

import Search from "./Search";
//api call api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9d986c82c3977e89a2551fa521df3cb1

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
      later: false,
      meteoLater: null,
    };
  }

  getWeather = async (e) => {
    e.preventDefault();
    const apiKey = "9d986c82c3977e89a2551fa521df3cb1";

    const city = e.target.elements.city.value;

    if (city) {
      const apiCall = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
      );
      const response = await apiCall.json();
      this.setState({ response: response });
      this.props.passCity(this.state.response.name);
      this.props.passIcon(this.state.response.weather[0].icon);
      this.props.passRain(
        this.state.response.weather[0].description.includes("rain"),
      );
    } else {
      this.setState({ response: "error" });
    }
  };

  calcCelsius(temp) {
    let cels = Math.floor(temp - 273.15);
    return cels;
  }

  toggleLater = () => {
    this.setState({ later: !this.state.later });
  };
  setMeteoLater = (meteo) => {
    if (meteo) {
      this.setState({ meteoLater: meteo });
      //   this.props.passCity(meteo.name);
      this.props.passIcon(meteo.weather[0].icon);
      this.props.passRain(meteo.weather[0].description.includes("rain"));
    }
  };

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
          later={this.props.later}
          meteoLater={this.props.meteoLater}
          toggleLater={this.toggleLater}
          passMeteoLater={this.setMeteoLater}
          passCity={this.props.passCity}
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
        ) : this.state.later && this.state.meteoLater ? (
          <div className="barMeteo">
            <div className="iconAndDescription">
              <span className="meteoIcon">
                <img
                  src={`http://openweathermap.org/img/wn/${this.state.meteoLater.weather[0].icon}.png`}
                  className={this.state.meteoLater.weather[0].icon}
                  id="iconMeteo"
                  alt={this.state.meteoLater.weather[0].description}
                />
              </span>
            </div>
            <div className="cityAndDeg">
              {<p className="cityMeteo">{this.props.city}</p>}
              <p className="descriptionMeteo">
                {this.state.meteoLater.weather[0].description}
              </p>
              <span className="temperatureMeteo">
                {this.calcCelsius(this.state.meteoLater.main.temp)}&deg;
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
