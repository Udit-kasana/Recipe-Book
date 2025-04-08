(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function v(){const e=document.createElement("header");e.innerHTML=`
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
  `;const o=e.querySelector("#hamburger"),i=e.querySelector("#navMenu"),n=e.querySelectorAll("#navMenu ul li a");return o.addEventListener("click",()=>{i.classList.toggle("show")}),n.forEach(t=>{t.addEventListener("click",()=>{i.classList.remove("show")})}),e}function g(e,o){const i=document.createElement("div");i.innerHTML=`
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
  `;const n=i.querySelector("#searchInput"),t=i.querySelector("#suggestions"),r=()=>{const l=n.value.toLowerCase().trim(),d=e.filter(s=>s.title.toLowerCase().includes(l));o(d),t.innerHTML=""},c=()=>{const l=n.value.toLowerCase().trim();if(t.innerHTML="",!l){o(e);return}e.filter(s=>s.title.toLowerCase().includes(l)).slice(0,5).forEach(s=>{const u=document.createElement("li");u.textContent=s.title,u.addEventListener("click",()=>{n.value=s.title,r()}),t.appendChild(u)})};return n.addEventListener("input",c),i}function f(e,o){const i=document.createElement("div");i.innerHTML=`
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
  `;const n=i.querySelector("#formModal"),t=document.querySelector("#adding"),r=i.querySelector("#closeModalBtn"),c=i.querySelector("#recipeForm");return t.addEventListener("click",()=>{n.classList.add("show")}),c.addEventListener("submit",l=>{l.preventDefault();const d={title:i.querySelector("#title").value.trim(),image:i.querySelector("#image").value.trim(),ingredients:i.querySelector("#ingredients").value.split(",").map(s=>s.trim()).filter(s=>s),steps:i.querySelector("#steps").value.split(".").map(s=>s.trim()).filter(s=>s)};e.push(d),localStorage.setItem("recipes",JSON.stringify(e)),c.reset(),n.classList.remove("show"),o(e)}),r.addEventListener("click",()=>{n.classList.remove("show")}),i}function L(e){const o=document.createElement("div");o.className="view-modal show",o.id="recipeModal",o.innerHTML=`
    <div class="view-container">
      <button class="close-btn" id="closeViewBtn">&times;</button>
      <section class="view-section" id="viewSection">
        <div class="view-image">
          <img 
            src="${e.image}" 
            alt="${e.title}" 
            onerror="this.src='https://placehold.co/400x300?text=Image+Not+Found';"
          />
        </div>
        <div class="view-content">
          <h2 id="viewTitle">${e.title}</h2>

          <div class="accordion open">
            <button class="accordion-toggle">
              Ingredients
              <span class="arrow">&#9662;</span>
            </button>
            <div class="accordion-content">
              <ul id="viewIngredients">
                ${e.ingredients.map(t=>`<li>${t}</li>`).join("")}
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
                ${e.steps.map(t=>`<li>${t}</li>`).join("")}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,o.querySelector("#closeViewBtn").addEventListener("click",()=>{o.remove()});const i=o.querySelectorAll(".accordion");return o.querySelectorAll(".accordion-toggle").forEach(t=>{t.addEventListener("click",()=>{i.forEach(r=>{r!==t.parentElement&&r.classList.remove("open")}),t.parentElement.classList.toggle("open")})}),o}function p(e,o){const i=document.createElement("div");i.classList.add("recipe-card"),i.innerHTML=`
    <img 
      class="recipe-image"
      src="${e.image}" 
      alt="${e.title}" 
      onerror="this.src='https://placehold.co/400x300?text=Image+Not+Found';"
    />
    <div class="card-title-wrapper">
      <h3 class="card-title">${e.title}</h3>
    </div>

    <div class="card-buttons">
      <button class="view-btn">View</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;const n=i.querySelector(".card-title"),t=i.querySelector(".card-title-wrapper");return setTimeout(()=>{n.scrollWidth>t.clientWidth&&n.classList.add("scrolling")},0),i.querySelector(".view-btn").addEventListener("click",()=>{const r=L(e);document.body.appendChild(r),setTimeout(()=>{r.classList.add("show")},10)}),i.querySelector(".delete-btn").addEventListener("click",()=>{o(e.title)}),i}function y(e,o){const i=document.createElement("div");e.length===0?i.innerHTML=` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list">
        <p>Add some recipes</p>
        </div>
      </div>`:i.innerHTML=` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list"></div>
      </div>`;const n=i.querySelector("#recipeList");e.forEach(r=>{const c=p(r,t);n.appendChild(c)});function t(r){e=e.filter(c=>c.title!==r),localStorage.setItem("recipes",JSON.stringify(e)),o(e),e.lenght===0&&(n.innerHTML="<p>Add some recipes</p>")}return i}function S(){const e=document.createElement("div");return e.innerHTML=`
    <footer class="app-footer">
        <div class="footer-content">
            <p>&copy; 2025 <strong>RecipeBook</strong>. All rights reserved.</p>
        </div>
    </footer>`,e}const b=[{title:"Spaghetti Bolognese",image:"https://placehold.co/400x300?text=Spaghetti+Bolognese",ingredients:["Spaghetti","Ground Beef","Tomato Sauce","Onion","Garlic"],steps:["Boil spaghetti","Cook beef with onion and garlic","Add tomato sauce","Simmer until thickened","Mix with spaghetti and serve"]},{title:"Grilled Cheese Sandwich",image:"https://placehold.co/400x300?text=Grilled+Cheese",ingredients:["Bread slices","Cheddar cheese","Butter"],steps:["Butter the bread","Place cheese between slices","Grill until golden brown on both sides"]},{title:"Pancakes",image:"https://placehold.co/400x300?text=Pancakes",ingredients:["Flour","Eggs","Milk","Sugar","Baking Powder"],steps:["Mix dry ingredients","Add eggs and milk","Stir to form batter","Pour on a hot pan and flip when bubbles form","Serve with syrup"]}],a=document.getElementById("app");localStorage.setItem("recipes",JSON.stringify(b));const m=JSON.parse(localStorage.getItem("recipes"))||[];a.appendChild(v());a.appendChild(g(m,h));a.appendChild(f(m,w));a.appendChild(y(m,h));a.appendChild(S());function w(e){h(e)}function h(e){const o=document.querySelector("#recipeList");o.innerHTML="",e.forEach(n=>{const t=p(n,i);o.appendChild(t)});function i(n){e=e.filter(t=>t.title!==n),localStorage.setItem("recipes",JSON.stringify(e)),o.innerHTML="",e.forEach(t=>{const r=p(t,i);o.appendChild(r)}),e.lenght===0&&(o.innerHTML="<p>Add some recipes</p>")}}
