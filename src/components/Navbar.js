import "../App.css";
import React from "react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
  return (
    <nav className="Navbar">
      <Link to="/">
        <img className= "logo"
         src="https://www.clipartmax.com/png/middle/1-10021_clipart-movies-hd-movies-logo-transparent.png"
         alt="movie logo"
         />
      </Link>


      <Link to="/movies">Movies</Link>
      <Link to="/people">People</Link>
      <Link to="/locations">Locations</Link>
    </nav>
  );
 }
}

export default Navbar;
