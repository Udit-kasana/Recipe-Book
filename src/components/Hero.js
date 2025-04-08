export function Hero(recipes, updateContainer) {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="hero">
      <div class="hero-content">
        <h2>Welcome to Your Personal Recipe Book</h2>
        <p>Save, search, and savor your favorite dishes with ease!</p>
        <div class="search-bar">
          <input
            type="text"
            id="searchInput"
            placeholder="Search recipes by name"
            autocomplete="off"
          />
          <ul id="suggestions" class="suggestion-list"></ul>
        </div>
      </div>
    </section>
  `;

  const searchBar = div.querySelector("#searchInput");
  const suggestionList = div.querySelector("#suggestions");

  // Function to filter recipes and update display
  const performSearch = () => {
    const query = searchBar.value.toLowerCase().trim();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query)
    );
    updateContainer(filtered);
    suggestionList.innerHTML = ""; // hide suggestions after search
  };

  // Function to show matching suggestions
  const showSuggestions = () => {
    const query = searchBar.value.toLowerCase().trim();
    suggestionList.innerHTML = "";

    if (!query) {
      updateContainer(recipes);
      return;
    };

    const matched = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(query)
    );

    matched.slice(0, 5).forEach((recipe) => {
      const li = document.createElement("li");
      li.textContent = recipe.title;
      li.addEventListener("click", () => {
        searchBar.value = recipe.title;
        performSearch();
      });
      suggestionList.appendChild(li);
    });
  };

  searchBar.addEventListener("input", showSuggestions);

  return div;
}
