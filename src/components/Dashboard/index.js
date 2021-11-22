import React, { useState } from 'react';
import Player from 'components/Player';
import Search from 'components/Search';
import logo from 'assets/images/yousync-logo-mobile.png';
import { Content } from 'globalStyles';
import { Switch, Route, Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  Header,
  Logo,
} from './style';

const Dashboard = ({ username, room, socket }) => {
  const [videoId, setVideoId] = useState('UJBknAsxfrA');
  
  return (
    <>
      <Header>
        <Logo src={logo} />
        <Link to="/search">
          <AiOutlineSearch size="1.3em" />
        </Link>
      </Header>
      
      <Player socket={socket} videoId={videoId}/>
      
      <Content>
        <h1>{username}</h1>
        <h2>{room}</h2>
      </Content>

      <Switch>
        <Route path="/search">
          <Search setVideoId={setVideoId} />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
