import React from "react";
import "./Search.css";
import Img from "../Image/setting.png";
import Image from "../Image/search.png";


class Search  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
      cityName:''
    };
    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount(){
    this.getLocation(); 

  }

  getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates)
    }else{
      alert("Geolocation is not supported by this browser")
    }
  }
  getCoordinates(position){
    console.log(position.coords.latitude, position.coords.longitude)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    const apiKey = "9d986c82c3977e89a2551fa521df3cb1";
   const city =  fetch(
       `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
    )
     .then(res=>res.json())
     .then(res=>this.setState({cityName:res.name}))

  }
  handleChange(event) {    
    this.setState({cityName: event.target.value});  }

render(){
  

  return (
    <div id="searchFunction">
      <p className='discoverActivity'>Discover Your Activity</p>
      <p className='descriptionDiscover'>Even if the weather is bad, there is an activity for you!</p>
      <div>{this.props.error? error(): null}</div>
      <form className ='formInput' onSubmit={this.props.loadweather} >
       <div className='inputSearchBar'>
       <div className='locationSearchBar'>
       <input  id="city" 
              type="text" 
              placeholder="City"
              value={this.state.cityName}
              onChange={this.handleChange}>
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
}
function error (){
  return alert('Please enter city and country!')
  
};
export default Search;