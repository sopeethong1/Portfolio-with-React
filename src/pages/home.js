import React from "react";
import "./style.css";
import Home from "../components/Home";
import Headshot from "../assets/headshot.png";

const Home = () => {
    return (
        <div>
            <p>Testing to make this work</p>
       <img src={Headshot}
         alt="SopeeHeadshot"></img>
         </div>
    );
  };

  export default Home;