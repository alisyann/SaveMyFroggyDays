import React, {useState} from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";
import Filter from './Filter'
import When from './When'


const Search = (props) => {
  const [show, setShow] = useState(false)
  const [showwhen, setShowwhen] = useState(false)
  return (
    <div id="searchFunction">
      <p className='discoverActivity'>Discover Your Activity</p>
      <p className='descriptionDiscover'>Even if the weather is bad, there is an activity for you!</p>
      <form className ='formInput' onSubmit={props.loadweather}>
       <div className='inputSearchBar'>

       <div className='locationSearchBar'>
       <input  id="city" type="text" placeholder="City"></input>
       </div>

       <div className='when'> <span className='letsGo'>LET'S GO!</span>
      <p>Now</p><input id="now" type="checkbox"/>
      <p>Later</p><input id="later" type="checkbox" onChange={()=>setShowwhen(!showwhen)}/>
      </div>
        
       
        <div id='filterDescription'>
          <p id='textFilter'> Categories</p>
        <img src={Img} alt="setting" id="setting" onClick={()=>setShow(!show)}></img>
        </div>
       </div>
       {showwhen?<When />:null}
       {show?<Filter />:null}
      <button type="submit"  id="send"> Search
        {/* <img src={Image} alt="logo search" id="search"></img> */}
      </button>
      <div className='errorWeather'>{props.error? error(): null}</div>
      </form>
    </div>
  );
};
 
function error (){
  return 'Please enter city! 🐸'
}
  
export default Search;