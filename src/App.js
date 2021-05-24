import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
