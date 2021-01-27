import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className='categories'>
      <p className='titleFilter'>CATEGORIES</p>
      <div className='choices'> 
      <p><input type="checkbox"></input>Culture</p>
      <p><input type="checkbox"></input>Sport</p>
      <p><input type="checkbox"></input>Shopping</p>
      <p><input type="checkbox"></input>Culture</p>
      <p><input type="checkbox"></input>Sport</p>
      <p><input type="checkbox"></input>Shopping</p>
      <p><input type="checkbox"></input>Culture</p>
      <p><input type="checkbox"></input>Sport</p>
      <p><input type="checkbox"></input>Shopping</p>
      </div>
      </div>
      <div className='specificities'>
      <p className='titleFilter' >SPECIFICITIES</p>
      <div className='choices'>
      <p><input type="checkbox"></input>Young Children</p>
      <p><input type="checkbox"></input>Reduced Mobility</p>
      <p><input type="checkbox"></input>Sun Alergie</p>
      <p><input type="checkbox"></input>Young Children</p>
      <p><input type="checkbox"></input>Reduced Mobility</p>
      <p><input type="checkbox"></input>Sun Alergie</p>
      </div>
      </div>
    </div>
  );
};

export default Filter;
