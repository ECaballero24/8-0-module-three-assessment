import "../App.css";
import React from "react";


class Movies extends React.Component {
  constructor(){
    super()

    this.state ={
      films:[]
    };
  }

  fetchFilms = () =>{
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        films: data,
      });
    }) ;
  };
  
  componentDidMount = () =>{
    this.fetchFilms();
  }


  // handleDropDown = (event) =>{
  //   let currentMovieObj
  // }

    render(){

      // let dropDownOptions = this.state.films.map((film) =>{
      //   return <option>{films.title}</option>
      // });



  return (
    <div className="movies">
      
        <h1>Select a Movie</h1>
        {/* <select onChange={this.handleDropDown}></select>
        {dropDownOptions} */}
      
    </div>
  );
 }
}

export default Movies;