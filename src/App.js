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
      description: "Unveiling my creative journey through captivating designs and seamless functionality.",
      link: "",
    },  
    {
      title: "Login page",
      description: "An elegant and intuitive front-end login page, seamlessly user-friendly.",
      link: "..//./Pictures///Login_page.png",
    },
    {
      title: "Booking site",
      description: "A user-friendly hospital booking site, streamlining appointments with ease",
      link: "https://www.google.com",
    },
    {
      title: "Todo list",
      description: "Efficient task management app for enhanced productivity.",
      link: "https://www.google.com",
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
            <Cards key={index} link={card.link} title={card.title} description={card.description}  />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
