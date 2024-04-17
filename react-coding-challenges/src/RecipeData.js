// src/dataService.js
function fetchRecipes() {
    return [
      {
        id: 1,
        name: "Vegan Brownies",
        diet: ["vegan", "dessert"],
        time: "45 minutes",
        ingredients: [
          "1 cup flour",
          "1 cup water",
          "1/4 cup olive oil",
          "1/4 cup cocoa powder",
          "1 cup sugar",
          "1 tsp baking powder"
        ],
        instructions: "Mix all ingredients and bake at 350 degrees F for 25 minutes."
      },
      {
        id: 2,
        name: "Keto Avocado Toast",
        diet: ["ketogenic", "breakfast"],
        time: "10 minutes",
        ingredients: [
          "2 slices of keto-friendly bread",
          "1 avocado",
          "Salt and pepper to taste",
          "Red pepper flakes",
          "2 tbsp olive oil"
        ],
        instructions: "Toast the bread, smash the avocado on top, season, and drizzle with olive oil."
      },
      {
        id: 3,
        name: "Vegetarian Paella",
        diet: ["vegetarian", "lunch"],
        time: "60 minutes",
        ingredients: [
          "1 tbsp olive oil",
          "1 onion, chopped",
          "1 bell pepper, chopped",
          "2 cups paella rice",
          "4 cups vegetable stock",
          "1 cup mixed vegetables",
          "Saffron",
          "Salt and pepper to taste"
        ],
        instructions: "Cook onion and pepper in oil. Add rice, stock, and saffron. Simmer for 40 minutes. Add vegetables, cook 20 more minutes."
      }
    ];
  }
  
  export default fetchRecipes;
  