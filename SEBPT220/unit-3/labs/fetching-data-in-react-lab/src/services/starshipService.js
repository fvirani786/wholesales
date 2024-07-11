// src/services/starshipService.js

const BASE_URL = 'https://swapi.dev/api/starships/';

export async function fetchStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
