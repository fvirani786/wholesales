import React from 'react';

const NowPlaying = ({ track }) => {
  return (
    <div>
      <h2>Now Playing</h2>
      <p>{track.name} by {track.artist}</p>
    </div>
  );
};

export default NowPlaying;
