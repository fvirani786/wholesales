// src/components/StarshipCard.jsx

function StarshipCard({ starship }) {
  return (
    <div>
      <h2>{starship.name}</h2>
      <p>Class: {starship.starship_class}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Model: {starship.model}</p>
    </div>
  );
}

export default StarshipCard;
