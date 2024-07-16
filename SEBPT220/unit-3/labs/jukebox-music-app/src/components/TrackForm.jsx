import React, { useState, useEffect } from 'react';

const TrackForm = ({ track, onSave }) => {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    if (track) {
      setName(track.name);
      setArtist(track.artist);
    } else {
      setName('');
      setArtist('');
    }
  }, [track]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTrack = { id: track ? track.id : Date.now(), name, artist };
    onSave(newTrack);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Track Name"
        required
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TrackForm;
