import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FeaturedProject from "./Components/FeaturedProject";
import AboutSection from "./Components/AboutSection";
import Footer from "./Components/Footer";

import FeaturedProjectDetails from "./pages/FeaturedProjectDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="portfolio">

              <NavBar />

              <main>
                <Hero />
                <FeaturedProject />
                <AboutSection />
                <Footer />
              </main>

            </div>
          }
        />

        {/* Featured Project Details */}
        <Route
          path="/featured-project"
          element={<FeaturedProjectDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;