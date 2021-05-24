import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <HashRouter basename="/">
    <div>
      <Header />
      <Wrapper>
      <Route exact path="/" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />
      </Wrapper>
      <Footer />
    </div>
    </HashRouter>
  );
}

export default App;
