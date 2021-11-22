import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-top: 50px;
  position: relative;
  width: 100%; 
  aspect-ratio: 16 / 9;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ControlsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
`;

const emitStateChange = (e, socket) => {  
  const position = e.target.getCurrentTime();
  const isPlaying = e.target.getPlayerState();

  if (isPlaying !== 1 && isPlaying !== 2) return;

  socket.emit('stateChange', {position, isPlaying});
};

let handleStateChange = emitStateChange;

const Player = ({ socket, videoId }) => {
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
        videoId={videoId}
        containerClassName="youtubeContainer"
        opts={{
          playerVars: {
            controls: 0,
            disablekb: 0,
            fs: 0,
            rel: 0,
          }
        }}
        onStateChange={e => handleStateChange(e, socket)}
      />
      {/* <ControlsWrapper>

      </ControlsWrapper> */}
    </PlayerWrapper>
  );
};

export default Player;
