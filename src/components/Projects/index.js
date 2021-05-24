import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/921d641d1d38a667c94554af10cc7576fc96cded/src/assets/budgettracker.png"
            alt="BudgetTracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBCardText>
            This budget tracker app allows the user to track their budget, including offline user withdrawals and deposits. 
            </MDBCardText>
            <MDBBtn
              href="https://github.com/sopeethong1/Online-Offline-Budget-Trackers.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/921d641d1d38a667c94554af10cc7576fc96cded/src/assets/cmstracker.png"
            alt="CMSTracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">CMS Employee Tracker</MDBCardTitle>
            <MDBCardText>
            The CMS-Employee-Tracker is a Content Management System built using node and inquirer. It's easy to view interface, powered by information stored in MySQL databases, provides a simple solution for any business owner to manage and organize their employee data.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/sopeethong1/CMS-Employee-Tracker.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "283px" }}
            className="img-fluid"
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/921d641d1d38a667c94554af10cc7576fc96cded/src/assets/ecommercebackend.png"
            alt="Ecommerce"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">E-Commerce Backend</MDBCardTitle>
            <MDBCardText>
            This ORM-E-Commerce-Back-End application will help a company compete with their e-commerce competitors by using the latest technologies of an Express.js API, MySQL, and Sequelize to accurately manage their inventory. 
            </MDBCardText>
            <MDBBtn
              href="https://github.com/sopeethong1/ORM-E-Commerce-Back-End.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            className="img-fluid"
            src="https://github.com/sopeethong1/Rando-PW-Generator-Javascript/blob/22c10ee729959e5fdfe5a499244ed33b70ad6146/Assets/03-javascript-homework-demo.png"
            alt="Password Generator"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBCardText>
              This application that enables users to generate random passwords based on criteria that they’ve selected. 
            </MDBCardText>
            <MDBBtn
              href="https://github.com/sopeethong1/Rando-PW-Generator-Javascript.git"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ height: "225px" }}
            className="img-fluid"
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/921d641d1d38a667c94554af10cc7576fc96cded/src/assets/homeroute.png"
            alt="HomeRoutes"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
              This website pulls data from an API to show the user the daily and
              five day forecast for any city on earth
            </MDBCardText>
            <MDBBtn
              href="https://https://hidden-scrubland-47296.herokuapp.com/"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;