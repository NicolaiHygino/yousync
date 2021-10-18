import React, { useState, useEffect } from 'react';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';
import { io } from 'socket.io-client';
import { useAuth } from 'hooks/useAuth';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [username, room, setUsername, setRoom] = useAuth()
  
  const handleLogin = (username, room) => {
    setUsername(username);
    setRoom(room);
  };

  useEffect(() => {
    const newSocket = io('http://localhost:3001/');
    setSocket(newSocket);
  }, [setSocket]);
  
  useEffect(() => {
    if(username && room && socket) {
      socket.emit('login', { username, room });
    }  
  }, [username, room, socket]);

  if (!username && !room) {
    return (
      <Login 
        socket={socket} 
        handleLogin={handleLogin}
      />
    );
  }
  if(!socket) return <h1>Loading</h1>;
  return (
    <Dashboard
      username={username}
      room={room}
      socket={socket}
    />
  );
};

export default App;
