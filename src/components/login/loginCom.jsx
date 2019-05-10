import React from 'react';
import {
  MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput,
} from 'mdbreact';

const LoginFormPage = ({ handleInput, handleLogin }) => (
  <MDBContainer className="signUpCard">
    <MDBRow className="signUpRow">
      <MDBCol md="6" className="signUpCol6">
        <form onSubmit={handleLogin}>
          <p className="h5 text-center mb-4">LOGIN</p>
          <div className="grey-text white-text">
            <MDBInput
              className="whiteLabel"
              label="Your name"
              icon="user"
              name="userName"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              onChange={handleInput}
            />
            <MDBInput
              label="Your password"
              name="password"
              icon="lock"
              group
              type="password"
              validate
              onChange={handleInput}
            />
          </div>
          <div className="text-center">
            <MDBBtn
              type="submit"
              color="elegant"
            >
              Login
            </MDBBtn>
          </div>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default LoginFormPage;
