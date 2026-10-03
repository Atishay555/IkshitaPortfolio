import React from "react";

const Hero = () => {
  return (
    <section className="hero">

      {/* Left Content */}
      <div className="hero-content">

        <h1>
          Hi, I’m
          <br />
          Ikshita!
        </h1>

        <p>
          I build engaging learning experiences that
          <br />
          empower individuals and meet business goals.
        </p>

        <a href="#contact" className="connect-btn">
          Let’s Connect
        </a>


      </div>

      {/* Right Image */}
      <div className="hero-image-container">
        <img
          src="/images/Profile.jpeg"
          alt="Ikshita"
          className="hero-image"
        />
      </div>

    </section>
  );
};

export default Hero;