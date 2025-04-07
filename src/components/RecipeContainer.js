import { RecipeView } from "./RecipeView.js";
import { RecipeCard } from "./RecipeCard.js";

export function RecipeContainer(recipes, updateContainer) {
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

  const recipeList = div.querySelector("#recipeList");
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
    updateContainer(recipes);
    if (recipes.lenght === 0) {
      recipeList.innerHTML = `<p>Add some recipes</p>`;
    }
  }

  return div;
}
