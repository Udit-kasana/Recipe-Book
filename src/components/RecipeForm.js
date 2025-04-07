export function RecipeForm(Recipes, onSubmit) {
  //creating recipe form
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="form-modal" id="formModal">
        <div class="form-container">
          <button class="close-btn" id="closeModalBtn">&times;</button>
          <section class="form-section">
            <h2>Add a New Recipe</h2>
            <form id="recipeForm">
              <input
                type="text"
                id="title"
                placeholder="Recipe Name"
                required
              />
              <textarea
                id="ingredients"
                placeholder="Ingredients (comma-separated)"
                required
              ></textarea>
              <textarea
                id="steps"
                placeholder="Preparation Steps (separated by periods)"
                required
              ></textarea>
              <input type="url" id="image" placeholder="Image URL" required />
              <button type="submit" id="submit-btn">Add Recipe</button>
            </form>
          </section>
        </div>
      </div>
  `;

  const formModal = div.querySelector("#formModal");
  const addBtn = document.querySelector("#adding");
  const closeBtn = div.querySelector("#closeModalBtn");
  const form = div.querySelector("#recipeForm");

  // Show full form view
  addBtn.addEventListener("click", () => {
    formModal.classList.add("show");
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const obj = {
      title: div.querySelector("#title").value.trim(),
      image: div.querySelector("#image").value.trim(),
      ingredients: div
        .querySelector("#ingredients")
        .value.split(",")
        .map((el) => el.trim())
        .filter((el) => el), // remove empty items
      steps: div
        .querySelector("#steps")
        .value.split(".")
        .map((el) => el.trim())
        .filter((el) => el), // remove empty items
    };
    Recipes.push(obj);
    localStorage.setItem("recipes", JSON.stringify(Recipes));
    form.reset(); // clear the form after submission
    formModal.classList.remove("show"); // hide the modal
    onSubmit(Recipes);
  });

  // Hide form
  closeBtn.addEventListener("click", () => {
    formModal.classList.remove("show");
  });

  return div;
}
