import React from 'react';
import Player from 'components/Player';
import logo from 'assets/images/yousync-logo-mobile.png';
import { Content } from 'globalStyles';
import {
  Header,
  Logo,
} from './style';

const Dashboard = ({ username, room, socket }) => {
  return (
    <>
      <Header>
        <Logo src={logo} />
      </Header>
      <Player socket={socket}/>
      <Content>
        <h1>{username}</h1>
        <h2>{room}</h2>
      </Content>
    </>
  );
};

export default Dashboard;
