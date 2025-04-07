export function Hero() {

  //creating hero section
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
            />
          </div>
          <button id="searchButton">Search</button>
        </div>
      </section>
  `;

  return div;
}
