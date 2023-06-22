import React, { useState } from "react";

function NavBar({ scrollToAbout, scrollToExperience, scrollToCards }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#" className="hover-effect" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover-effect" onClick={() => { scrollToAbout(); closeMobileMenu();}}>
              About Me
            </a>
          </li>
          <li>
            <a
              className="hover-effect"
              onClick={() => {
                scrollToExperience();
                closeMobileMenu();
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover-effect"
              onClick={() => {
                scrollToCards();
                closeMobileMenu();
              }}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div id="mobile" onClick={toggleMobileMenu}>
        <i className={`fas fa-${isMobileMenuOpen ? "times" : "bars"}`}></i>
      </div>
    </nav>
  );
}

export default NavBar;
