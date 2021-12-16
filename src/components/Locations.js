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


    // this.setState({
    //   currentLocation: currentLocationObj,
    // });
  // };


    render(){



  return (
    <div className="locations">
      <ul className= "list-of-locations">
        {this.state.locations.name}

      </ul>
      
      
    </div>
  );
 }
}

export default Locations;