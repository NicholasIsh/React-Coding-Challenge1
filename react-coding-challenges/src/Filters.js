import React from 'react';

function Filters({ onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} style={{ margin: "10px" }}>
      <option value="">All</option>
      <option value="favorites">Favorites</option>
      <option value="vegan">Vegan</option>
      <option value="ketogenic">Ketogenic</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="dessert">Dessert</option>
      <option value="breakfast">Breakfast</option>
      
    </select>
  );
}

export default Filters;
