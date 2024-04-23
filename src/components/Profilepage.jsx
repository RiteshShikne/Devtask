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
  font-size: 24px;
  background-color: #FFFFFF;
  color: #1D2226;
  margin-bottom: 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 16px;
`;

const Avatar1 = styled.img`
  margin-left: -38px;
  transform: translate(50%, 50%);
  width: 21px;
  height: 23px;
  z-index: 1;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row; /* Display items side by side */
  align-items: center; /* Align items vertically */
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #1D2226;
  margin: -140px 4px 0px 90px;
`;

const UserEmail = styled.p`
  font-size: 16px;
  color: #1D2226;
  margin: -90px 4px 0px -90px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #1D2226;
  margin-bottom: 24px;
  margin-top: 0px;
`;

function LoginPage({ toggle1 }) {
  const toggleProfilePage = () => {
    toggle1();
  };

  return (
    <PageContainer>
      <Title>Account Settings</Title>
      <ProfileContainer>
        <Avatar src="/images/Ellipse 114.png" alt="Profile Picture" />
        <Avatar1 src="/images/Group 1585 (1).svg" alt="Second Avatar" />
      </ProfileContainer>
      <UserInfo>
        <UserName>Mary Doe</UserName>
        <UserEmail>Marry@Gmail.Com</UserEmail>
      </UserInfo>
      <Description>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</Description>
    </PageContainer>
  );
}

export default LoginPage;
