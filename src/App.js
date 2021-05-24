import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";



function App() {
  return (
    <Router>
    <div>
    <Header />
        <Switch>
   
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
