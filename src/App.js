import React from "react";
import NavBar from ".//Components/navbar";
import ".//Styles/Style.css";
import Home from "./Components/Home.jsx";
import About from ".//Components/About";
import"./Styles/experiences.css";
import Experience from "./Components/Experience";


function App() {
  return (
    <div className="App">
      <div className="background-container">
        <div className="overlay"></div>
        <NavBar />
        <div className="container">
          <Home />
        </div>
        <div className="about-me">
          <About/>
        </div>
        <div className="Experience">
      <Experience/>
        </div>


      </div>
    </div>
  );
}
export default App;
