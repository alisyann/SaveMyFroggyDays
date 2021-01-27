import React from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";


const Search = (props) => {
  return (
    <div id="searchFunction">
      <p className='discoverActivity'>Discover Your Activity</p>
      <p className='descriptionDiscover'>Even if the weather is bad, there is an activity for you!</p>
      <div>{props.error? error(): null}</div>
      <form className ='formInput' onSubmit={props.loadweather}>
       <div className='inputSearchBar'>
       <div className='locationSearchBar'>
       <input  id="city" 
              type="text" 
              placeholder="City">
        </input>
        <input  id="country" 
              type="text" 
              placeholder="Country">
        </input>
       </div>
        <div id='filterDescription'>
          <p id='textFilter'> Categories and specificities</p>
        <img src={Img} alt="setting" id="setting"></img>
        </div>
       </div>
      <button type="submit"  id="send"> Search
        <img src={Image} alt="logo search" id="search"></img>
      </button>
      </form>
    </div>
  );
};
 
function error (){
  return alert('Please enter city and country!')
  
};
export default Search;