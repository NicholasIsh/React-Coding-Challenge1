// Recipe.js
import React, { useState } from 'react';
import { BsChevronUp, BsChevronDown, BsHeart, BsHeartFill } from 'react-icons/bs';

function Recipe({ recipe, toggleFavorite }) {  // Make sure toggleFavorite is received here
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2 onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        {recipe.name} {showDetails ? <BsChevronUp /> : <BsChevronDown />}
      </h2>
      <button onClick={() => toggleFavorite(recipe.id)} style={{ border: 'none', background: 'none' }}>
        {recipe.favorite ? <BsHeartFill color="red" /> : <BsHeart />}
      </button>
      {showDetails && (
        <div>
          <p>Time to cook: {recipe.time}</p>
          <p>Diet: {recipe.diet.join(", ")}</p>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
