export function Header() {
  //creating Nav bar
  const header = document.createElement("header");
  header.innerHTML = `
    <h1><a href="index.html">My Recipe Book</a></h1>
    <div class="hamburger" id="hamburger">&#9776;</div>
    <nav id="navMenu">
      <ul>
        <li class="underline-hover"><a href="#">Home</a></li>
        <li class="underline-hover"><a href="#recipes">Recipes</a></li>
        <li class="underline-hover">
          <a href="#recipes" id="adding">Add</a>
        </li>
      </ul>
    </nav>
  `;

  // Now querying inside header so they exist
  const hamburger = header.querySelector("#hamburger");
  const navMenu = header.querySelector("#navMenu");
  const navLinks = header.querySelectorAll("#navMenu ul li a");

  // Toggle hamburger menu
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Close menu when nav link clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });

  return header;
}
