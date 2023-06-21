import React from "react";
import NavBar from ".//Components/navbar";
import ".//Styles/Style.css";
import Home from "./Components/Home.jsx";
import About from ".//Components/About";
import "./Styles/experiences.css";
import Experience from "./Components/Experience";
import Cards from "./Components/Cards";
import ".//Styles//cards.css";
import Footer from "./Components/Footer";
import "./Styles/footer.css";

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <div className="overlay"></div>
        <NavBar />
        <div className="container">
          <Home />
        </div>
        </div>

        <div className="about-me">
          <About />
        </div>
        <div className="Experience">
          <Experience />
        </div>
      
        <div className="cards">
        <h1 className="border-effect" id="cert-title">
          Certifications
        </h1>
          <div className="grid-cards">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
       <Footer/>
    </div>
  );
}
export default App;
