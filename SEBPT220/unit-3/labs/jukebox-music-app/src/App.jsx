import React, { useState, useEffect } from 'react';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [editingTrack, setEditingTrack] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('/api/tracks')
      .then(response => response.json())
      .then(data => setTracks(data));
  }, []);

  const addTrack = (track) => {
    fetch('/api/tracks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(track),
    })
    .then(response => response.json())
    .then(newTrack => setTracks([...tracks, newTrack]));
  };

  const updateTrack = (updatedTrack) => {
    fetch(`/api/tracks/${updatedTrack.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTrack),
    })
    .then(() => setTracks(tracks.map(track => (track.id === updatedTrack.id ? updatedTrack : track))));
  };

  const deleteTrack = (trackId) => {
    fetch(`/api/tracks/${trackId}`, {
      method: 'DELETE',
    })
    .then(() => setTracks(tracks.filter(track => track.id !== trackId)));
  };

  const playTrack = (track) => {
    setCurrentTrack(track);
  };

  const handleAddNewTrack = () => {
    setEditingTrack(null);
    setShowForm(true);
  };

  const handleEditTrack = (track) => {
    setEditingTrack(track);
    setShowForm(true);
  };

  return (
    <div className="App">
      <button onClick={handleAddNewTrack}>Add New Track</button>
      <TrackList
        tracks={tracks}
        onEdit={handleEditTrack}
        onDelete={deleteTrack}
        onPlay={playTrack}
      />
      {showForm && (
        <TrackForm
          track={editingTrack}
          onSave={(track) => {
            if (editingTrack) {
              updateTrack(track);
            } else {
              addTrack(track);
            }
            setShowForm(false);
          }}
        />
      )}
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  );
};

export default App;

