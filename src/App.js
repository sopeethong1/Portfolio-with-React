import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import About from "./pages/about";
import Projects from "./pages/projects";
import ResumeInfo from "./pages/resumeinfo";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />
        <Wrapper>
        <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumeInfo} />
          <Route exact path="/portfolio" component={Projects} /> 
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
