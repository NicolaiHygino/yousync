import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import { io } from 'socket.io-client'

const App = () => {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  const handleLogin = (username, room) => {
    setUsername(username)
    setRoom(room)
  }

  useEffect(() => {
    const newSocket = io('http://localhost:3001/')
    setSocket(newSocket)
  }, [setSocket])

  if (!username && !room) {
    return (
      <Login 
        socket={socket} 
        handleLogin={handleLogin}
      />
    )
  } 
  return (
    <div>
      <h1>{username}</h1>
      <h2>{room}</h2>
    </div>
  );
}

export default App
