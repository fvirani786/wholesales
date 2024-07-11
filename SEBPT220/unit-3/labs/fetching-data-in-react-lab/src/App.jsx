// src/App.jsx

import { useState, useEffect } from 'react';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';
import { fetchStarships } from './services/starshipService';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStarships = async () => {
      const data = await fetchStarships();
      setStarships(data);
      setFilteredStarships(data);
      setLoading(false);
    };
    getStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) =>
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1>Starship Search</h1>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : <StarshipList starships={filteredStarships} />}
    </main>
  );
}

export default App;

