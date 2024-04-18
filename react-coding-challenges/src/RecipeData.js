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
      },
      {
        id: 4,
        name: "Spicy Thai Peanut Noodles",
        diet: ["vegan", "lunch"],
        time: "20 minutes",
        ingredients: ["8 oz noodles", "1/4 cup peanut butter", "2 tbsp soy sauce", "1 tbsp sriracha", "1 bell pepper", "1 carrot", "Cilantro"],
        instructions: "Cook noodles. Mix peanut butter, soy sauce, sriracha. Toss noodles with sauce, vegetables, and top with cilantro."
      },
      {
        id: 5,
        name: "Classic Margherita Pizza",
        diet: ["vegetarian", "dinner"],
        time: "30 minutes",
        ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Basil leaves", "Olive oil", "Salt"],
        instructions: "Spread sauce on dough, add slices of mozzarella. Bake at 475°F for 10-15 min. Top with basil and drizzle with olive oil."
      },
      {
        id: 6,
        name: "Lemon Herb Mediterranean Chicken Salad",
        diet: ["keto", "lunch"],
        time: "25 minutes",
        ingredients: [
          "2 chicken breasts",
          "1 tbsp olive oil",
          "3 cloves garlic",
          "Juice of 1 lemon",
          "1 tsp dried basil",
          "1 avocado",
          "Mixed greens",
          "Cucumber",
          "Red onion"
        ],
        instructions: "Marinate chicken with garlic, lemon juice, basil, salt, pepper, and oil. Grill. Slice and serve on greens with avocado, cucumber, onion."
      },
      {
        id: 7,
        name: "Beef and Broccoli Stir-Fry",
        diet: ["ketogenic", "dinner"],
        time: "20 minutes",
        ingredients: [
          "1 lb beef slices",
          "2 cups broccoli florets",
          "1 tbsp soy sauce",
          "1 tbsp oyster sauce",
          "1 garlic clove",
          "1 tbsp ginger",
          "Sesame seeds"
        ],
        instructions: "Stir-fry beef until browned. Add garlic, ginger, broccoli, sauces, and cook until tender. Sprinkle with sesame seeds."
      },
      {
        id: 8,
        name: "Butternut Squash Soup",
        diet: ["vegetarian", "soup"],
        time: "45 minutes",
        ingredients: [
          "1 butternut squash",
          "1 onion",
          "1 carrot",
          "3 cups vegetable broth",
          "1 tsp cinnamon",
          "Cream (optional)"
        ],
        instructions: "Roast squash, onion, and carrot until soft. Blend with broth until smooth. Simmer, add cinnamon, season with salt, pepper. Serve with cream."
      },
      {
        id: 9,
        name: "Coconut Shrimp with Mango Dipping Sauce",
        diet: ["pescatarian", "appetizer"],
        time: "30 minutes",
        ingredients: [
          "1 lb shrimp",
          "1 cup shredded coconut",
          "2 eggs",
          "1 cup flour",
          "1 ripe mango",
          "1 tbsp honey",
          "Juice of 1 lime"
        ],
        instructions: "Bread shrimp with flour, egg, then coconut. Fry until golden. Blend mango, lime juice, honey for sauce."
      },
      {
        id: 10,
        name: "Chickpea Veggie Burger",
        diet: ["vegan", "dinner"],
        time: "35 minutes",
        ingredients: [
          "1 can chickpeas",
          "1/2 onion, chopped",
          "1 carrot, grated",
          "1 tsp cumin",
          "1 tsp garlic powder",
          "1/2 cup breadcrumbs"
        ],
        instructions: "Mash chickpeas, mix with vegetables, spices, and breadcrumbs. Form patties, fry until crispy on both sides."
      }
    ];
  }
  
  export default fetchRecipes;
  