import { RecipeView } from "./RecipeView.js";
import { RecipeCard } from "./RecipeCard.js";

export function RecipeContainer(recipes) {
  const div = document.createElement("div");
  if (recipes.length === 0) {
    div.innerHTML = ` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list">
        <p>Add some recipes</p>
        </div>
      </div>`;
  } else {
    div.innerHTML = ` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list"></div>
      </div>`;
  }

  recipes.forEach((recipe) => {
    const card = RecipeCard(recipe, viewRecipe, deleteRecipe);
    div.querySelector("#recipeList").appendChild(card);
  });

  function viewRecipe(recipe) {
    const div = RecipeView(recipe);
    document.body.appendChild(div); // ✅ Important!
    setTimeout(() => {
      div.classList.add("show");
    }, 10);
  }

  function deleteRecipe(recipe) {
    alert(`Deleted: ${recipe.title}`);
    // Optional: Implement real delete logic later
  }

  return div;
}
