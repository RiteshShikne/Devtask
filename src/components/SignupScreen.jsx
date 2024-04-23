import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  width: 375px;
  height: 812px;
  background: #F7F8F9;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Title = styled.h2`
  top: 40px;
  left: 20px;
  width: 188px;
  height: 69px;
  text-align: left;
  font: normal normal medium 28px/36px Rubik;
  color: #1D2226;
  opacity: 1;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 24px;
  color: #1D2226; /* Label text color */
`;

const RequiredSpan = styled.span`
  color: red;
  margin-left: 4px;
`;

const Legend = styled.legend`
  color: #6C25FF;
  margin-top: 24px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #CBCBCB;
  border-radius: 6px;
  padding: 12px;
  box-sizing: border-box;
  &:required:invalid {
    border-color: red; /* Apply red border on invalid required input */
  }
`;

const Button = styled.button`
  margin-top: auto; /* Push the button to the bottom */
  width: 335px;
  height: 46px;
  background: #6C25FF;
  border: none;
  border-radius: 6px;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  /* Customizing radio button appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #6C25FF; /* Purple border */
  outline: none;
  margin-right: 8px;
  vertical-align: middle;
  position: relative;
  top: 3px;
  cursor: pointer;
  &:checked {
    background-color: #6C25FF; /* Purple background when checked */
  }
`;

const Space = styled.div`
  flex-grow: 1; /* Fill the empty space */
`;

function LoginPage({ toggle1 }) {
  const toggleProfilePage = () => {
    toggle1();
  };

  return (
    <PageContainer>
      <Title>Create your PopX account</Title>
      <form>
      <fieldset>
          <Legend>Full Name<RequiredSpan>*</RequiredSpan></Legend>
          <Label><Input id="fullName" type="text" placeholder="Marry Doe" required/></Label>
        </fieldset>
        <fieldset>
          <Legend>Phone number<RequiredSpan>*</RequiredSpan></Legend>
          <Label><Input id="phoneNumber" type="tel" placeholder="Marry Doe" /></Label>
        </fieldset>
        <fieldset>
          <Legend>Email Address<RequiredSpan>*</RequiredSpan></Legend>
          <Label><Input id="email" type="email" placeholder="Marry Doe" /></Label>
        </fieldset>
        <fieldset>
          <Legend>Password<RequiredSpan>*</RequiredSpan></Legend>
          <Label><Input id="password" type="password" placeholder="Marry Doe" /></Label>
        </fieldset>
        <fieldset>
          <Legend>Company name<RequiredSpan>*</RequiredSpan></Legend>
          <Label><Input id="companyName" type="text" placeholder=" Marry Doe" /></Label>
        </fieldset>
          
            Are you an Agency? <RequiredSpan>*</RequiredSpan>
          
          <Label>
            <RadioInput id="yes" type="radio" name="agency" value="yes" required />
            <span>Yes</span>
          </Label>
          <Label>
            <RadioInput id="no" type="radio" name="agency" value="no" required />
            <span>No</span>
          </Label>
        
      </form>
      <Space />
      <Link to="/Profilepage">
        <Button>Create Account</Button>
      </Link>
    </PageContainer>
  );
}

export default LoginPage;
