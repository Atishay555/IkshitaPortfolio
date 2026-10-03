import React from "react";

const NavBar = () => {
  return (
    <header className="navbar">

      {/* Logo Section */}
      <div className="logo-section">
        <a href="/">
          <img
            src="/images/Logo.png"
            alt="Ikshita Logo"
            className="logo"
          />
        </a>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <a href="#featured">Featured Project</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
};

export default NavBar;