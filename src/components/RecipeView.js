export function RecipeView(recipe) {

  //creating modal to view full recipe with steps and ingrediants
  const modal = document.createElement("div");
  modal.className = "view-modal show";
  modal.id = "recipeModal";

  modal.innerHTML = `
    <div class="view-container">
      <button class="close-btn" id="closeViewBtn">&times;</button>
      <section class="view-section" id="viewSection">
        <div class="view-image">
          <img 
            src="${recipe.image}" 
            alt="${recipe.title}" 
            onerror="this.src='https://placehold.co/400x300?text=Image+Not+Found';"
          />
        </div>
        <div class="view-content">
          <h2 id="viewTitle">${recipe.title}</h2>

          <div class="accordion open">
            <button class="accordion-toggle">
              Ingredients
              <span class="arrow">&#9662;</span>
            </button>
            <div class="accordion-content">
              <ul id="viewIngredients">
                ${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}
              </ul>
            </div>
          </div>

          <div class="accordion">
            <button class="accordion-toggle">
              Preparation Steps
              <span class="arrow">&#9662;</span>
            </button>
            <div class="accordion-content">
              <ol id="viewSteps">
                ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // Close modal
  modal.querySelector("#closeViewBtn").addEventListener("click", () => {
    modal.remove();
  });

  // Accordion logic – only one open at a time
  const accordions = modal.querySelectorAll(".accordion");
  const toggles = modal.querySelectorAll(".accordion-toggle");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordions.forEach((acc) => {
        if (acc !== btn.parentElement) acc.classList.remove("open");
      });
      btn.parentElement.classList.toggle("open");
    });
  });

  return modal;
}
