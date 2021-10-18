import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Player = ({ socket }) => {
  const playerRef = useRef(null);
  const [emitter, setEmitter] = useState('');

  useEffect(() => {
    socket.on('play', () => {
      setEmitter('server');
      playerRef.current.internalPlayer.playVideo()
    });

    socket.on('pause', () => {
      setEmitter('server');
      playerRef.current.internalPlayer.pauseVideo();
    })
  }, [socket]); 

  const handlePlayerEvent = (action) => {
    if (emitter === 'server') {
      setEmitter('client');
      return;
    };

    socket.emit(action);
  };

  return (
    <PlayerWrapper>
      <YouTube
        ref={playerRef}
        videoId="UJBknAsxfrA"
        opts={{height: 'auto', width: '100%'}}
        onPlay={() => handlePlayerEvent('play')}
        onPause={() => handlePlayerEvent('pause')}
      />
    </PlayerWrapper>
    
  );
};

export default Player;
