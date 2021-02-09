import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Weather from "./components/Weather";
import Geolocation from "./components/Geolocation";

// eslint-disable-next-line no-undef
const App = () => {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <Header />
      <Weather passCity={setCity} />
      <Result city={city} />
      <Geolocation />
    </div>
  );
};

export default App;
