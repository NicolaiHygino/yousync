import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const emitStateChange = (e, socket) => {  
  const position = e.target.getCurrentTime();
  const isPlaying = e.target.getPlayerState();

  if (isPlaying !== 1 && isPlaying !== 2) return;

  socket.emit('stateChange', {position, isPlaying});
};

let handleStateChange = emitStateChange;

const Player = ({ socket }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current.internalPlayer;
    socket.on('stateChange', ({position, isPlaying}) => {
      handleStateChange = () => {};
      
      isPlaying === 1 ? player.playVideo() : player.pauseVideo();
      player.seekTo(position);

      setTimeout(() => {
        handleStateChange = emitStateChange;
      }, 500);
    })
  }, [socket]);

  return (
    <PlayerWrapper>
      <YouTube
        ref={playerRef}
        videoId="UJBknAsxfrA"
        opts={{height: 'auto', width: '100%'}}
        onStateChange={e => handleStateChange(e, socket)}
      />
    </PlayerWrapper>
  );
};

export default Player;
