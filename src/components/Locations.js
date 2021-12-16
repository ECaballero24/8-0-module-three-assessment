import "../App.css";
import React from "react";


class Locations extends React.Component {
  constructor(){
    super()

    this.state = {
      locations:[]
      // currentLocation: null,
    };
  }
    fetchLocations = () =>{
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res)=> res.json())
        .then((data) => {
          this.setState({
            locations: data,
            
          });
       });
   };

   componentDidMount = () =>{
     this.fetchLocations();
   }

  // handleDropDown = (event) =>{
  //   let currentLocationsObj = this.state.locations.find((location) => {
  //     return location.name === event.target.value;
  //   )};

  //   this.setState({
  //     currentLocation: currentLocationObj,
  //   });
  // };


    render(){

      let dropDownOptions = this.state.locations.map((location) =>{
        return <option>{location.name}</option>
        
      });



  return (
    <div className="locations">
      
       <h1>List of Locations</h1>
      <select onChange={this.handleDropDown}>
      <option> Select Location </option>
        {dropDownOptions}
      </select>
      
    </div>
  );
 }
}

export default Locations;