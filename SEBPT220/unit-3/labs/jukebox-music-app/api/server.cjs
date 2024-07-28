import express from 'express';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

let tracks = [
  { id: uuidv4(), title: 'Track 1', artist: 'Artist 1' },
  { id: uuidv4(), title: 'Track 2', artist: 'Artist 2' },
];

// Get all tracks
app.get('/api/tracks', (req, res) => {
  res.json(tracks);
});

// Add a new track
app.post('/api/tracks', (req, res) => {
  const newTrack = { id: uuidv4(), ...req.body };
  tracks.push(newTrack);
  res.json(newTrack);
});

// Update a track
app.put('/api/tracks/:id', (req, res) => {
  const trackIndex = tracks.findIndex(track => track.id === req.params.id);
  if (trackIndex !== -1) {
    tracks[trackIndex] = { ...tracks[trackIndex], ...req.body };
    res.json(tracks[trackIndex]);
  } else {
    res.status(404).send('Track not found');
  }
});

// Delete a track
app.delete('/api/tracks/:id', (req, res) => {
  tracks = tracks.filter(track => track.id !== req.params.id);
  res.status(204).send();
});

const PORT = process.env.PORT || 5001;  // Changed port to 5001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
