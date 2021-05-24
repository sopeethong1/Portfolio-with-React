import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <HashRouter basename="/">
    <div>
    <Header />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          </Wrapper>
          <Route exact path="/footer" component={Footer} />
    </div>
  </HashRouter>
  );
}

export default App;
