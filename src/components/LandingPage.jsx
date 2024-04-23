import React from 'react';
import styled from "styled-components";
import {Link, NavLink} from 'react-router-dom'

const PageContainer = styled.div`
  width: 375px; /* Assuming mobile viewport */
  height: 812px; /* Assuming iPhone X dimensions */
  background: #F7F8F9;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  height: 500px;
  padding: 0px;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  position: relative;
  top: 50px; /* Adjusted position */
  left: 20px;
  width: 231px;
  height: 33px;
  color: black;
  font-size: 24px;
  margin: 0;
  text-align: left;
  font: normal normal medium 28px/17px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 1;
  bottom: 10px;
`;

const ContentContainer = styled.div`
  padding: 20px;
  text-align: left;
  margin-top: 50px; /* Adjusted margin */
  font: normal normal medium 28px/17px Rubik;
`;

const MainText = styled.p`
  color: #1D2226;
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0.6;
  margin-top: -10px;
  left: 20px;
  width: 232px;
  height: 48px;
  text-align: left;
  font: normal normal normal 18px/26px Rubik;
  letter-spacing: 0px;
  color: #1D2226;
  opacity: 0.6;
`;

const Button = styled.button`
  width: 100%;
  height: 46px;
  background: #6C25FF;
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
`;

const Button1 = styled.button`
  width: 100%;
  height: 46px;
  background: #6C25FF4B 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
`;

const Space1 = styled.div`
  flex-grow: 1; /* Fill the empty space */
  margin-bottom: 549px;
`;

function LandingPage({ toggle }) {
  const toggleSignup = () => {
    // Call the toggle function provided by props to switch to the signup screen
    toggle();
  };

  return (
    
    <PageContainer>
      <Space1 />
      <HeaderContainer>
        <HeaderTitle>Welcome to PopX</HeaderTitle>
        <ContentContainer>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </MainText>
          <Link to="/SignupScreen"><Button >Create Account</Button></Link>
          <Link to="/LoginScreen"><Button1>Already Registered? Login</Button1></Link>
        </ContentContainer>
      </HeaderContainer>
    </PageContainer>
  );
}

export default LandingPage;
