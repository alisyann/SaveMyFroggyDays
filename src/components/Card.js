import React from "react";
import "./Card.css";
import Img from "../Image/eiffel.jpg";
const Card = () => {
  return (
    <div className="card">
      <div className="cardContent">
        <img src={Img} alt="tour eiffel" id="eiffel" />
        <div className="titre">
          <h2>Tour Eiffel</h2>
        </div>
      </div>
    </div>
  );
};
export default Card;
