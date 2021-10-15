import React from 'react';
import logo from 'assets/images/yousync-logo-mobile.png';
import {
  DashContent,
  Header,
  Logo,
} from './style';

const Dashboard = ({ username, room }) => {
  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <DashContent>
        <h1>{username}</h1>
        <h2></h2>
      </DashContent>
    </>
  );
};

export default Dashboard;
