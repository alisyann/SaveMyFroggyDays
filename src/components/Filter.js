import React, { useState, useEffect } from "react";
import "./Filter.css";
//import { IconContext } from "react-icons";

//      <IconContext.Provider value = {{color:'#9dcc3a'}}>

const Filter = (props) => {
  const [checked, setChecked] = useState(props.checked);

  const handleClick = async () => {
    setChecked(!checked);
  };
  useEffect(() => {
    props.passChecked(checked);
  }, [props, checked]);
  return (
    <li className="filter-list-element" onClick={handleClick}>
      <input type="checkbox" checked={checked} onChange={handleClick}></input>
      {props.filterPic} {props.filterName}
    </li>
  );
};

export default Filter;
