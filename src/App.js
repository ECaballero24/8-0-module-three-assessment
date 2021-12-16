import "./App.css";
import react from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Locations from "./components/Locations";
import People from "./components/People";
import Movies from "./components/Movies";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/locations' component={Locations}/>
         <Route exact path='/movies' component={Movies}/>
         <Route exact path='/people' component={People}/>
      </Switch>
      
    </div>
  );
}

export default App;