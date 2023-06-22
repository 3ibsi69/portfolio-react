import React, { useState } from "react";
import NavBar from "./Components/navbar";
import "./Styles/Style.css";
import Home from "./Components/Home.jsx";
import About from "./Components/About";
import "./Styles/experiences.css";
import Experience from "./Components/Experience";
import Cards from "./Components/Cards";
import "./Styles/cards.css";
import Footer from "./Components/Footer";
import "./Styles/footer.css";

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
      image: "./Pictures/Portfolio.png",
      description: "Unveiling my creative journey through captivating designs and seamless functionality.",
      link: "#",
    },  
    {
      title: "Login page",
      image: "./Pictures/To-do.png",
      description: "An elegant and intuitive front-end login page, seamlessly user-friendly.",
      link: "#",
    },
    {
      title: "Booking site",
      image: "./Pictures/book.png",
      description: "A user-friendly hospital booking site, streamlining appointments with ease",
      link: "#",
    },
    {
      title: "Todo list",
      image: "./Pictures/To-do.png",
      description: "Efficient task management app for enhanced productivity.",
      link: "#",
    },
    {
      title: "Weather app",
      image: "./Pictures/weather-app.png",
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
