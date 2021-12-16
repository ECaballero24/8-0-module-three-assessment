import "../App.css";
import React from "react";


class Home extends React.Component {
    render(){
  return (
    
    <div className="Home">
       {/* <nav>
         <img className= "logo"
         src="https://www.clipartmax.com/png/middle/1-10021_clipart-movies-hd-movies-logo-transparent.png"
         alt="movie logo"
         />
       </nav>  */}
      <main>
         <nav>
         {/* <img className= "logo"
         src="https://www.clipartmax.com/png/middle/1-10021_clipart-movies-hd-movies-logo-transparent.png"
         alt="movie logo"
         /> */}
       </nav> 
        <h1>Welcome to GhibliApp</h1>
      </main>
    </div>
  );
 }
}

export default Home;