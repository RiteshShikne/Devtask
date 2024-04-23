import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PageContainer = styled.div`
  width: 375px; /* Assuming mobile viewport */
  height: 812px; /* Assuming iPhone X dimensions */
  background: #F7F8F9;
  display: flex;
  flex-direction: column;
  padding: 32px; /* Added padding for inner content */
`;

const Title = styled.h2`
  top: 40px;
  left: 20px;
  width: 188px;
  height: 69px;
  text-align: left;
  font: normal normal medium 28px/36px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 1;
`;

const Subtitle = styled.h3`
  margin-top: -14px; /* Adjusted margin */
  width: 232px;
  height: 48px;
  text-align: left;
  font: normal normal normal 18px/26px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 0.6;
`;

const Label = styled.label`
  margin-top: 24px; /* Adjusted margin */
`;

const Legend = styled.legend`
  color: #6C25FF; /* Custom color for legends */
  margin-top: 24px; /* Adjusted margin */
`;

const Input = styled.input`
  width: 100%; /* Full width */
  height: 40px; /* Adjusted height */
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  padding: 12px; /* Adjusted padding */
  box-sizing: border-box; /* Include padding in width */
`;

const Button = styled.button`
  margin-top: 32px; /* Adjusted margin */
  width: 100%; /* Full width */
  height: 56px; /* Adjusted height */
  background: #CBCBCB;
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
`;

function LoginPage({ toggle1 }) {
  const toggleProfilePage = () => {
    // Call the toggle function provided by props to switch to the signup screen
    toggle1();
  };

  return (
    <PageContainer>
      <Title>Sign in to your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Subtitle>
      <form>
        <fieldset>
          <Legend>Email Address</Legend>
          <Label><Input id="indoor" type="email" placeholder="Enter email address" /></Label>
        </fieldset>
        <fieldset>
          <Legend>Password</Legend>
          <Label><Input id="outdoor" type="password" placeholder="Enter password" /></Label>
        </fieldset>
      </form>
      <Link to="/Profilepage"><Button>Login</Button></Link>
    </PageContainer>
  );
}

export default LoginPage;
