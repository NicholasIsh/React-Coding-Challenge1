// RecipeList.js
import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes, toggleFavorite }) {  // Make sure to receive toggleFavorite here
  return (
    <div>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />  // Passing it to Recipe
      ))}
    </div>
  );
}

export default RecipeList;
