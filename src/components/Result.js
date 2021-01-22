import React from "react";
import Today from "./Today";
import Card from "./Card";
import "./Result.css";

const Result = () => {
  return (
    <div className="result">
      <Today />
      <Card />
    </div>
  );
};

export default Result;
