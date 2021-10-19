import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

let emitStateChange = (e, socket) => {  
  const position = e.target.getCurrentTime();
  const isPlaying = e.target.getPlayerState();

  if (isPlaying !== 1 && isPlaying !== 2) return;

  socket.emit('stateChange', {position, isPlaying});
};

const Player = ({ socket }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = playerRef.current.internalPlayer;
    socket.on('stateChange', ({position, isPlaying}) => {
      const oldEmitStateChange = emitStateChange;
      emitStateChange = () => {};
      
      isPlaying === 1 ? player.playVideo() : player.pauseVideo();
      player.seekTo(position);

      setTimeout(() => {
        emitStateChange = oldEmitStateChange;
      }, 500)
    })
  }, [socket]);

  return (
    <PlayerWrapper>
      <YouTube
        ref={playerRef}
        videoId="UJBknAsxfrA"
        opts={{height: 'auto', width: '100%'}}
        onStateChange={e => emitStateChange(e, socket)}
      />
    </PlayerWrapper>
    
  );
};

export default Player;
