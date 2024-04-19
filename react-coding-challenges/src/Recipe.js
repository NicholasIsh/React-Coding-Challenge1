import React, { useState } from 'react';
import { BsChevronUp, BsChevronDown, BsHeart, BsHeartFill } from 'react-icons/bs';

/**
 * Recipe component displays individual recipe information and allows interaction.
 * It supports expanding/collapsing details and toggling the favorite status.
 *
 * @param {Object} props - Contains the recipe object and the toggleFavorite function.
 * @param {Object} props.recipe - The recipe data.
 * @param {Function} props.toggleFavorite - Function to toggle the favorite status of the recipe.
 */
function Recipe({ recipe, toggleFavorite }) {
  // State to manage the visibility of recipe details
  const [showDetails, setShowDetails] = useState(false);

  /**
   * Toggle the visibility of recipe details.
   * Expands or collapses the recipe details section upon clicking the recipe name.
   */
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      {/* Recipe title with a clickable icon that indicates expand/collapse state */}
      <h2 onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        {recipe.name} {showDetails ? <BsChevronUp /> : <BsChevronDown />}
      </h2>
      {/* Button to toggle the favorite status of the recipe. Uses heart icons to indicate status. */}
      <button onClick={() => toggleFavorite(recipe.id)} style={{ border: 'none', background: 'none' }}>
        {recipe.favorite ? <BsHeartFill color="red" /> : <BsHeart />}
      </button>
      {/* Conditional rendering of recipe details based on showDetails state */}
      {showDetails && (
        <div>
          <p>Time to cook: {recipe.time}</p> {/* Displays cooking time */}
          <p>Diet: {recipe.diet.join(", ")}</p> {/* Lists dietary tags */}
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li> // Lists ingredients using unique keys for React optimization
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p> {/* Detailed cooking instructions */}
        </div>
      )}
    </div>
  );
}

export default Recipe;
