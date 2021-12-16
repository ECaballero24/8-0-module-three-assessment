import "../App.css";
import React from "react";
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
  return (
    <nav className="Navbar">
      <Link to="/">HOME</Link>
      <Link to="/movies">MOVIES</Link>
      <Link to="/people">PEOPLE</Link>
      <Link to="/locations">LOCATIONS</Link>
    </nav>
  );
 }
}

export default Navbar;
