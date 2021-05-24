import React from "react";
import { HashRouter } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Footer from "./components/Footer/index";
// import Wrapper from "./components/Wrapper/index";
import About from "./pages/about";
// import Projects from "./pages/projects";
import Resume from "./pages/resume";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />
        <About />
        <Resume />
        {/* <Projects/> */}

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
