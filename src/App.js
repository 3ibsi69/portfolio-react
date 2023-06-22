import React, { useState } from "react";
import NavBar from "./Components/navbar";
import Home from "./Components/Home.jsx";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

import "./Styles/Style.css";
import "./Styles/experiences.css";
import "./Styles/cards.css";
import "./Styles/footer.css";


import Portfolio from './Pictures/Portfolio.png';
import To_do from './Pictures/To-do.png';
import login from './Pictures/Login_page.png';
import Book from './Pictures/book.png';
import Weather from './Pictures/weather-app.png';



function App() {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
 
  const aboutRef = React.createRef();
  const experienceRef = React.createRef();
  const cardsRef = React.createRef();

  const [cardvalue, setCardValue] = useState([
    {
  
      title: "Portfolio",
      image:Portfolio,
      description: "Unveiling my creative journey through captivating designs and seamless functionality.",
      link: "#",
    },  
    {
      title: "Login page",
      image: login,
      description: "An elegant and intuitive front-end login page, seamlessly user-friendly.",
      link: "#",
    },
    {
      title: "Booking site",
      image: Book,
      description: "A user-friendly hospital booking site, streamlining appointments with ease",
      link: "#",
    },
    {
      title: "Todo list",
      image: To_do,
      description: "Efficient task management app for enhanced productivity.",
      link: "#",
    },
    {
      title: "Weather app",
      image: Weather,
      description: "A weather app that provides real-time weather updates.",
      link: "#",
    },
  

    
  ]);

  return (
    <div className="App">
      <div className="background-container">
        <div className="overlay"></div>
        <NavBar
          scrollToAbout={() => scrollToRef(aboutRef)}
          scrollToExperience={() => scrollToRef(experienceRef)}
          scrollToCards={() => scrollToRef(cardsRef)}
        />
        <div className="container">
          <Home />
        </div>
      </div>

      <div ref={aboutRef} className="about-me">
        <About />
      </div>
      <div ref={experienceRef} className="Experience">
        <Experience />
      </div>

      <div className="cards">
        <h1 className="border-effect" id="cert-title">
          Projects
        </h1>
        <div ref={cardsRef} className="grid-cards">
          {cardvalue.map((card, index) => (
            <Cards key={index} image={card.image} link={card.link} title={card.title} description={card.description}  />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
