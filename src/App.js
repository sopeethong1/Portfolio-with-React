import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
