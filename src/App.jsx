/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ScrollProgressIndicator from "./Components/ScrollProgressIndicator";
import DarkModeToggle from "./Components/DarkModeToggle";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Prajwal Parihar",
  title: "Data Science Student | Python Developer & AI/ML Enthusiast",
  email: "prajwalparihar292003@gmail.com",
  phone: "+91-9356959051",
  gitHub: "PrajwalCP29",
  instagram: "",
  linkedIn: "prajwalparihar",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#2563EB";
const secondaryColor = "#F0F4F8";

const App = () => {
  return (
    <div id="main">
      <ScrollProgressIndicator />
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Skills />
      <Education />
      <Portfolio />
      <Certifications />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      <DarkModeToggle />
    </div>
  );
};

export default App;
