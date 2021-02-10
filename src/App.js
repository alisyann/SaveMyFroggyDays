import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";
import Weather from "./components/Weather";

// eslint-disable-next-line no-undef
const App = () => {
  

  const [city, setCity] = useState("");
  const [rain, setRain] = useState(false);
  const [icon, setIcon] = useState("")
 

  return (
    <div className="App">
      <div className= {`i${icon}`} >
        <Header />
        <Weather passCity={setCity} passRain={setRain} passIcon={setIcon}/>
        <Result city={city} rain={rain} />
      </div>
    </div>
  );
};

export default App;
