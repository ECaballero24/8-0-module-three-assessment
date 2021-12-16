import "../App.css";
import React from "react";


class People extends React.Component {
    constructor(){
      super();

      this.state = {
        people:[],
        
      };
    }

    fetchLocations = () =>{
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=> res.json())
        .then((data) => {
          this.setState({
            people: data,
            
          });
       });
   };

    render(){
  return (
    <div className="people">
      <main>
        <h1>Search for a Person</h1>
        <select onChange={this.handleDropDownChange}>
          <option>Find your Person</option>
          {dropDownOptions}
        </select>
      </main>
    </div>
  );
 }
}

export default People;