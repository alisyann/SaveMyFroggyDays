import React, {useState} from "react";
import "./Filter.css";

  const Filter = () => {
    return (
      <div className="filter">
        <div className='categories'>
        <p className='titleFilter'>CATEGORIES</p>
        <ul className='choices'> 
        <li><input type="checkbox"></input>Culture</li>
        <li><input type="checkbox"></input>Sport</li>
        <li><input type="checkbox"></input>Shopping</li>
        <li><input type="checkbox"></input>Culture</li>
        <li><input type="checkbox"></input>Sport</li>
        <li><input type="checkbox"></input>Shopping</li>
        <li><input type="checkbox"></input>Culture</li>
        <li><input type="checkbox"></input>Sport</li>
        <li><input type="checkbox"></input>Shopping</li>
        </ul>
        </div>
      </div>
    );
  }



export default Filter;
