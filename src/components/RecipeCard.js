import { RecipeView } from "./RecipeView.js";

export function RecipeCard(recipe, onDelete) {
  // creating card
  const card = document.createElement("div");
  card.classList.add("recipe-card");
  card.innerHTML = `
    <img 
      class="recipe-image"
      src="${recipe.image}" 
      alt="${recipe.title}" 
      onerror="this.src='https://placehold.co/400x300?text=Image+Not+Found';"
    />
    <div class="card-title-wrapper">
      <h3 class="card-title">${recipe.title}</h3>
    </div>

    <div class="card-buttons">
      <button class="view-btn">View</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  const title = card.querySelector(".card-title");
  const wrapper = card.querySelector(".card-title-wrapper");

  // Add scrolling class only if title is wider than the wrapper
  setTimeout(() => {
    if (title.scrollWidth > wrapper.clientWidth) {
      title.classList.add("scrolling");
    }
  }, 0);

  // Event listeners

  // to view the full width recipe
  card.querySelector(".view-btn").addEventListener("click", () => {
    const div = RecipeView(recipe);
    document.body.appendChild(div); // ✅ Important!
    setTimeout(() => {
      div.classList.add("show");
    }, 10);
  });

  // to delete the recipe
  card.querySelector(".delete-btn").addEventListener("click", () => {
    onDelete(recipe.title);
  });

  return card;
}
