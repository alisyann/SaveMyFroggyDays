import React, {useState} from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Filter.css";
import { IconContext } from 'react-icons';

  const Filter = () => {
    return (
      <Router>
      <div className="filter">
      <IconContext.Provider value = {{color:'#9dcc3a'}}>
        <div className='categories'>
        <p className='titleFilter'>CATEGORIES</p>
        <ul className='choices'> 
        <li><input type="checkbox"></input>Adult
        <Link className='iconCategories'>
            <AiIcons.AiFillHome/>
        </Link>
        </li>
        <li><input type="checkbox"></input>Religious Places
        <Link className='iconCategories' >
            <BiIcons.BiChurch/>
        </Link>
        </li>
        <li><input type="checkbox"></input>Shopping
        <Link className='iconCategories'>
            <AiIcons.AiFillShopping/>
        </Link>
        </li>
        <li><input type="checkbox"></input>Food
        <Link className='iconCategories'>
            <BiIcons.BiRestaurant/>
        </Link>
        </li>
        <li><input type="checkbox"></input>Sport
        <Link className='iconCategories'>
            <BiIcons.BiRun/>
        </Link>
        </li>
        </ul>
        </div>
        </IconContext.Provider>
      </div>
      </Router>
    );
  }



export default Filter;
