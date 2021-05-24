import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <img
            style={{ height: "285px" }}
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/921d641d1d38a667c94554af10cc7576fc96cded/src/assets/headshot.png"
            class="float-left pr-4 pb-3 img-fluid"
            alt="SopeeThongImage"
          />
          <p style={{ fontSize: "27px" }}>
        “Whatever Your Mind Can Conceive and Believe, It Can Achieve.” –
        Napoleon Hill. <br></br> I am a committed, service-minded and solution focused
        Full Stack Developer and team player with a broad scope of experience in
        OTA technology, hospitality, SaaS and digital marketing, with a passion
        for learning code! <br></br> Unlike physics where physical restraints are in
        everything you do, there are no limitations in coding besides your
        ability to think of a logically consistent solution. As a life-long
        learner, I'm driven by self-evolution and challenges, but more
        importantly by acts of benevolence and servitude. With each new
        programming language comes opportunity to create technologies to add
        value, enrich or empower others, allowing me to live and work guided by
        both mission and motivation. <br></br> As a GA Tech Bootcamp student, I'm quickly
        learning JavaScript, HTML, CSS, jQuery, GitHub, Local Storage, APIs,
        JSON, Bootstrap, MySQL and MERN stack as foundations for building
        novice projects.
      </p>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
