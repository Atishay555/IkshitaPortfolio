import React from "react";

const FeaturedNavBar = () => {
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
        
        <a href="/">Home</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
};

export default FeaturedNavBar;