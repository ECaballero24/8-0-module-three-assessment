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

      let dropDownOptions = this.state.people.map((peoples) =>{
        return <option>{}</option>;
      })

  return (
    <div className="people">
      <main>
        <h1>Search for a Person</h1>
        
        
      </main>
    </div>
  );
 }
}

export default People;