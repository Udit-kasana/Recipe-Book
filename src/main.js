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

const app = document.getElementById("app");

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

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
    const card = RecipeCard(recipe, viewRecipe, deleteRecipe);
    recipeList.appendChild(card);
  });

  function viewRecipe(recipe) {
    const div = RecipeView(recipe);
    document.body.appendChild(div); // ✅ Important!
    setTimeout(() => {
      div.classList.add("show");
    }, 10);
  }

  function deleteRecipe(title) {
    recipes = recipes.filter((recipe) => recipe.title !== title);

    localStorage.setItem("recipes", JSON.stringify(recipes));
    updatedContainer(recipes);
    if (recipes.lenght === 0) {
      recipeList.innerHTML = `<p>Add some recipes</p>`;
    }
  }
}
