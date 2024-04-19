import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import Filters from './Filters';
import fetchRecipes from './RecipeData';  // Imports recipe data from a static data file

/**
 * Main App component hosting the recipe book functionalities.
 * Utilizes useState for state management and useEffect for initial data setup.
 */
function App() {
  // State management for recipes, filtering criteria, and search query.
  const [recipes, setRecipes] = useState([]); // Stores the array of recipes
  const [filter, setFilter] = useState(''); // Stores the current filter selection
  const [searchQuery, setSearchQuery] = useState(''); // Stores the current search query

  // Effect hook to initialize recipes with a favorite flag.
  useEffect(() => {
    // Fetches recipes and adds a 'favorite' property initialized to false
    const recipesData = fetchRecipes().map(recipe => ({ ...recipe, favorite: false }));
    setRecipes(recipesData);
  }, []);

  /**
   * Handles changing the filter criteria from the Filters component.
   * @param {string} filter - The selected filter value to apply.
   */
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  /**
   * Handles updates to the search query input by the user.
   * Converts input to lowercase to ensure case-insensitive matching.
   * @param {Object} event - The event object containing the text input.
   */
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  /**
   * Toggles the favorite status of a recipe.
   * Maps over all recipes and updates the favorite property of the matched recipe.
   * @param {number} id - The unique identifier of the recipe to toggle.
   */
  const toggleFavorite = (id) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return { ...recipe, favorite: !recipe.favorite }; // Toggles the favorite property
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  /**
   * Filters recipes based on the selected filter criteria and the search query.
   * Applies a case-insensitive search on recipe names.
   * Combines filter conditions for 'favorites' and dietary types seamlessly.
   */
  const filteredRecipes = recipes.filter(recipe => {
    const filterCondition = filter === 'favorites' ? recipe.favorite : recipe.diet.includes(filter) || filter === '';
    const searchCondition = recipe.name.toLowerCase().includes(searchQuery);
    return filterCondition && searchCondition;
  });

  // Render function of the App component, providing input for search and filter components.
  return (
    <div>
      <h1>React Challenge #1: Interactive Recipe Book</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{ margin: '10px', padding: '8px', width: '3000px' }}  // Ensures the search box is visually distinct
      />
      <Filters onChange={handleFilterChange} />
      <RecipeList recipes={filteredRecipes} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;  // Exports the App for use in the main index.js
