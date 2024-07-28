import React from 'react';

const TrackList = ({ tracks, onEdit, onDelete, onPlay }) => {
  return (
    <div>
      {tracks.map(track => (
        <div key={track.id}>
          <h3>{track.name}</h3>
          <p>{track.artist}</p>
          <button onClick={() => onPlay(track)}>Play</button>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;

