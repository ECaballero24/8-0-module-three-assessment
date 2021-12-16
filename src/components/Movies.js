import "../App.css";
import React from "react";


class Movies extends React.Component {
  constructor(){
    super()

    this.state ={
      films:[],
      currentFilms: null,
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


  handleDropDown = (event) =>{
    let currentMovieObj = this.state.films.find((film) =>{
      return film.title === event.target.value
    })
  }

    render(){

      let dropDownOptions = this.state.films.map((film) =>{
        return <option>{film.title}</option>;
      })



  return (
    <div className="movies">
      
        <h1>Select a Movie</h1>
        <select onChange={this.handleDropDownChange}>
          <option>Select a Movie</option>
          {dropDownOptions}

          </select>
      
    </div>
  );
 }
}

export default Movies;