const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tracks = [
  { id: 1, name: 'Track 1', artist: 'Artist 1' },
  { id: 2, name: 'Track 2', artist: 'Artist 2' },
];

app.get('/api/tracks', (req, res) => {
  res.json(tracks);
});

app.post('/api/tracks', (req, res) => {
  const newTrack = req.body;
  tracks.push({ ...newTrack, id: Date.now() });
  res.status(201).json(newTrack);
});

app.put('/api/tracks/:id', (req, res) => {
  const { id } = req.params;
  const updatedTrack = req.body;
  tracks = tracks.map(track => (track.id === parseInt(id) ? updatedTrack : track));
  res.json(updatedTrack);
});

app.delete('/api/tracks/:id', (req, res) => {
  const { id } = req.params;
  tracks = tracks.filter(track => track.id !== parseInt(id));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
