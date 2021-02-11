import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Weather from "./components/Weather";

// eslint-disable-next-line no-undef
const App = () => {
  const [city, setCity] = useState("");
  const [rain, setRain] = useState(false);
  const [filterAdult, setFilterAdult] = useState(false);
  const [filterRelig, setFilterRelig] = useState(true);
  const [filterRest, setFilterRest] = useState(true);
  const [filterSport, setFilterSport] = useState(true);
  const [filterShop, setFilterShop] = useState(true);

  return (
    <div className="App">
      <Header />
      <Weather
        passCity={setCity}
        passRain={setRain}
        passFilterAdult={setFilterAdult}
        filterAdult={filterAdult}
        passFilterRelig={setFilterRelig}
        filterRelig={filterRelig}
        passFilterRest={setFilterRest}
        filterRest={filterRest}
        passFilterSport={setFilterSport}
        filterSport={filterSport}
        passFilterShop={setFilterShop}
        filterShop={filterShop}
      />
      <Result city={city} rain={rain} />
    </div>
  );
};

export default App;
