import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import Filters from './Filters';
import fetchRecipes from './RecipeData';  // Updated data fetching

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const recipesData = fetchRecipes().map(recipe => ({ ...recipe, favorite: false }));
    setRecipes(recipesData);
  }, []);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const toggleFavorite = (id) => {
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return { ...recipe, favorite: !recipe.favorite };
      }
      return recipe;
    });
    setRecipes(updatedRecipes);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const filterCondition = filter === 'favorites' ? recipe.favorite : recipe.diet.includes(filter) || filter === '';
    const searchCondition = recipe.name.toLowerCase().includes(searchQuery);
    return filterCondition && searchCondition;
  });

  return (
    <div>
      <h1>React Challenge #1: Interactive Recipe Book</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={handleSearchChange}
        style={{ margin: '10px', padding: '8px', width: '300px' }}
      />
      <Filters onChange={handleFilterChange} />
      <RecipeList recipes={filteredRecipes} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
