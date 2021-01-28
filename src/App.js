import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Weather from "./components/Weather";

// eslint-disable-next-line no-undef
const App = () => {
  const [city, setCity] = useState("");
  return (
    <div className="App">
      <Header />
      <Weather passCity={setCity} />
      <Result city={city} />
    </div>
  );
};

export default App;
