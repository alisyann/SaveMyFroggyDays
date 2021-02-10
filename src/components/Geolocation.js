import React from "react";
import './Geolocation.css'

class Geolocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: "",
    };
    this.getLocation = this.getLocation.bind(this)
    this.getCoordinates = this.getCoordinates.bind(this)
  }

  componentDidMount(){
    this.getLocation()
  }

  getLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates)
    }else{
      alert("Geolocation is not supported by this browser")
    }
  }
  getCoordinates(position){
   // console.log(position.coords.latitude, position.coords.longitude)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
  }
  
  render() {
    return (
      <div className="Geolocation">
        <p>latitude: {this.state.latitude}</p>
        <p>longitude: {this.state.longitude}</p>
      </div>
    );
  }
}

export default Geolocation