import { useState } from 'react';

export const useAuth = () => {
  const userStorage = localStorage.getItem('username');
  const roomStorage = localStorage.getItem('room');

  const [username, setUsername] = useState(userStorage);
  const [room, setRoom] = useState(roomStorage);

  const saveUsername = newUsername => {
    localStorage.setItem('username', newUsername);
    setUsername(newUsername);
  };
  
  const saveRoom = newRoom => {
    localStorage.setItem('room', newRoom);
    setRoom(newRoom);
  };

  return [username, room, saveUsername, saveRoom];
}
