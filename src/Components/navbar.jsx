function NavBar({ scrollToAbout, scrollToExperience,scrollToCards }) {
    return (
      <nav className="navbar">
        <div className="nav-links">
          <ul>
            <li>
              <a href="#" className="hover-effect">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover-effect" onClick={scrollToAbout}>
                About Me
              </a>
            </li>
            
            <li>
              <a href="#" className="hover-effect" onClick={scrollToExperience}>
                Experience
              </a>
            </li>
            <li>
              <a href="#" className="hover-effect" onClick={scrollToCards}>
                Projects
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default NavBar;
  