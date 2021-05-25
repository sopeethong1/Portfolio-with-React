import React from "react";
import {
  MDBCardGroup,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,

} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-8">
      <br></br>
      <br></br> <h1>Projects</h1>
      <br></br>
      <br></br>
      
      <MDBCardGroup deck className="mt-10">
        <MDBCard className="border border-purple">
          <MDBCardImage
           src={process.env.PUBLIC_URL + '/budgettracker.png'}
            alt="BudgetTracker"
            width="100%" height="100px"
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Budget Tracker</MDBCardTitle>
            <MDBBtn
              href="https://github.com/sopeethong1/Online-Offline-Budget-Trackers.git"
              color="pink"
              size="md"
            > 
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-purple">
          <MDBCardImage
           style={{ height: "200%" }}
           src={process.env.PUBLIC_URL + '/pwgen.png'}
            alt="Password Generator"
            top
          />
          <MDBCardBody>
            
            <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
            <MDBBtn
              href="https://github.com/sopeethong1/Rando-PW-Generator-Javascript.git"
              color="pink"
              size="md"> 
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-purple">
  
          <MDBCardImage
           src={process.env.PUBLIC_URL + '/homeroute.png'}
            alt="BudgetTracker"
            width="100%" height="100px"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">HomeRoutes App</MDBCardTitle>
         
            <MDBBtn
              href="https://github.com/Mattyb5000/property-management-app.git"
              color="pink"
              size="md"
            > 
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-purple">
          <MDBCardImage
            src={process.env.PUBLIC_URL + '/portfolio.png'}
            alt="React Portfolio"
            width="100%" height="100px"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">React Portfolio</MDBCardTitle>
            <MDBBtn
              href="https://github.com/sopeethong1/Portfolio-with-React.git"
              color="pink"
              size="md"
            >
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="border border-purple">
          <MDBCardImage
            className="img-fluid"
            src={process.env.PUBLIC_URL + '/cmstracker.png'}
            alt="CMSTracker"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">CMS Employee Tracker</MDBCardTitle>
            <MDBBtn
              href="https://github.com/sopeethong1/CMS-Employee-Tracker.git"
              color="pink"
              size="md"
            >
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="border border-purple">
          <MDBCardImage
            className="img-fluid"
            src={process.env.PUBLIC_URL + '/ecommercebackend.png'}
            alt="Ecommerce"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">E-Commerce Backend</MDBCardTitle>
            <MDBBtn
              href="https://github.com/sopeethong1/ORM-E-Commerce-Back-End.git"
              color="pink"
              size="md"
            >
              GitHub Link 
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   
    </MDBContainer>
  );
};

export default Projects;