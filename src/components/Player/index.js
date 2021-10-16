import React, { useRef } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Player = () => {
  const playerRef = useRef(null);

  const opts = {
    height: 'auto',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  return (
    <PlayerWrapper>
      <YouTube
        ref={playerRef}
        videoId="UJBknAsxfrA"
        opts={opts}
        onReady={() => console.log('teste')}
        onStateChange={() => console.log('CHANGE')}
      />
    </PlayerWrapper>
  );
};

export default Player;
