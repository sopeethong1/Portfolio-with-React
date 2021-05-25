import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Resume from "../assets/SThong_Resume_2021.pdf";

const Resumepdf = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="10">
          <embed id="Resume" src={Resume} width="100%" height="650px" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Resumepdf;