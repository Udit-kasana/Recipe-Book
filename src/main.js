import "./styles/style.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/RecipeForm.css";
import "./styles/RecipeCard.css";
import "./styles/RecipeView.css";
import "./styles/Footer.css";

import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { RecipeForm } from "./components/RecipeForm.js";
import { RecipeContainer } from "./components/RecipeContainer.js";
import { RecipeCard } from "./components/RecipeCard.js";
import { Footer } from "./components/Footer.js";

// localStorage.clear();

const defaultRecipes = [
  {
    title: "Spaghetti Bolognese",
    image: "https://placehold.co/400x300?text=Spaghetti+Bolognese",
    ingredients: [
      "Spaghetti",
      "Ground Beef",
      "Tomato Sauce",
      "Onion",
      "Garlic",
    ],
    steps: [
      "Boil spaghetti",
      "Cook beef with onion and garlic",
      "Add tomato sauce",
      "Simmer until thickened",
      "Mix with spaghetti and serve",
    ],
  },
  {
    title: "Grilled Cheese Sandwich",
    image: "https://placehold.co/400x300?text=Grilled+Cheese",
    ingredients: ["Bread slices", "Cheddar cheese", "Butter"],
    steps: [
      "Butter the bread",
      "Place cheese between slices",
      "Grill until golden brown on both sides",
    ],
  },
  {
    title: "Pancakes",
    image: "https://placehold.co/400x300?text=Pancakes",
    ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Baking Powder"],
    steps: [
      "Mix dry ingredients",
      "Add eggs and milk",
      "Stir to form batter",
      "Pour on a hot pan and flip when bubbles form",
      "Serve with syrup",
    ],
  },
];

const app = document.getElementById("app");

localStorage.setItem("recipes", JSON.stringify(defaultRecipes));

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

app.appendChild(Header());
app.appendChild(Hero(recipes));
app.appendChild(RecipeForm(recipes, onsubmit));
app.appendChild(RecipeContainer(recipes, updatedContainer));
app.appendChild(Footer());

function onsubmit(recipes) {
  updatedContainer(recipes);
}

function updatedContainer(recipes) {
  const recipeList = document.querySelector("#recipeList");
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = RecipeCard(recipe, deleteRecipe);
    recipeList.appendChild(card);
  });

  function deleteRecipe(title) {
    recipes = recipes.filter((recipe) => recipe.title !== title);

    localStorage.setItem("recipes", JSON.stringify(recipes));
    recipeList.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = RecipeCard(recipe, deleteRecipe);
      recipeList.appendChild(card);
    });
    if (recipes.lenght === 0) {
      recipeList.innerHTML = `<p>Add some recipes</p>`;
    }
  }
}
