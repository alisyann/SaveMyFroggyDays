import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Result from "./components/Result";
import Weather from "./components/Weather";


// eslint-disable-next-line no-undef
class App extends React.Component{
  constructor(){
    super();
    this.state = {
    };
  }




  render() {
  return (
    <div className="App">
      <Header />
      {/* <Search loadweather={this.getWeather} error={this.state.error}/> */}
      { <Weather  
      // city={this.state.city} 
      //           country={this.state.country}
      //           tempCelsius={this.state.celsius}
      //           tempMax={this.state.tempMax}
      //           tempMin={this.state.tempMin}
      //           description={this.state.description}
      //           icon={this.state.icon} 
                /> }
      
    </div>
  );
}
}

export default App;