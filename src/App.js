import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Weather from "./components/Weather";

// eslint-disable-next-line no-undef
const App = () => {
  state = {
    icone: "01d"
  }

  const [city, setCity] = useState("");
  const [rain, setRain] = useState(false);

  return (
    <div className="App">
      <div className= {response.weather[0].description} >
      <Header />
      <Weather passCity={setCity} passRain={setRain} />
      <Result city={city} rain={rain} />
      </div>
    </div>
  );
};

export default App;
