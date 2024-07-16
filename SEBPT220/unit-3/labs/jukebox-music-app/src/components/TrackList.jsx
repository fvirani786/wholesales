import React from 'react';

const TrackList = ({ tracks, onEdit, onDelete, onPlay }) => {
  return (
    <div>
      {tracks.map(track => (
        <div key={track.id}>
          <p>{track.name} by {track.artist}</p>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track.id)}>Delete</button>
          <button onClick={() => onPlay(track)}>Play</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
