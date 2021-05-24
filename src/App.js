import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
// import Wrapper from "./components/Wrapper/index";
// import About from "./pages/about";
// import Projects from "./pages/projects";
// import Contact from "./pages/contact";
// import Resume from "./pages/resume";



function App() {
  return (
    <HashRouter basename="/">
    <div className="App">
    <NavBar />
        {/* <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          </Wrapper> */}
          <Route exact path="/footer" component={Footer} />
    </div>
  </HashRouter>
  );
}

export default App;
