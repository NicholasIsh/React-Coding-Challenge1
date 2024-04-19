import React from 'react';
import Recipe from './Recipe';

/**
 * RecipeList component that renders a list of Recipe components.
 * This component is responsible for mapping each recipe data to a Recipe component.
 *
 * @param {Object} props - Contains the recipes array and the toggleFavorite function.
 * @param {Array} props.recipes - Array of recipe objects to be displayed.
 * @param {Function} props.toggleFavorite - Function to toggle the favorite status, passed to each Recipe.
 */
function RecipeList({ recipes, toggleFavorite }) {
  return (
    <div>
      {/* Maps each recipe object to a Recipe component. */}
      {recipes.map(recipe => (
        // Recipe component is rendered for each recipe.
        // 'key' prop is essential for efficient dynamic updates in lists of elements in React.
        <Recipe key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
}

export default RecipeList;
