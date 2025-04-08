(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function g(){const e=document.createElement("header");e.innerHTML=`
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
  `;const r=e.querySelector("#hamburger"),i=e.querySelector("#navMenu"),n=e.querySelectorAll("#navMenu ul li a");return r.addEventListener("click",()=>{i.classList.toggle("show")}),n.forEach(t=>{t.addEventListener("click",()=>{i.classList.remove("show")})}),e}function v(e,r){const i=document.createElement("div");i.innerHTML=`
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
  `;const n=i.querySelector("#searchInput"),t=i.querySelector("#suggestions"),o=()=>{const a=n.value.toLowerCase().trim(),d=e.filter(s=>s.title.toLowerCase().includes(a));r(d),t.innerHTML=""},c=()=>{const a=n.value.toLowerCase().trim();if(t.innerHTML="",!a){r(e);return}e.filter(s=>s.title.toLowerCase().includes(a)).slice(0,5).forEach(s=>{const u=document.createElement("li");u.textContent=s.title,u.addEventListener("click",()=>{n.value=s.title,o()}),t.appendChild(u)})};return n.addEventListener("input",c),i}function f(e,r){const i=document.createElement("div");i.innerHTML=`
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
  `;const n=i.querySelector("#formModal"),t=document.querySelector("#adding"),o=i.querySelector("#closeModalBtn"),c=i.querySelector("#recipeForm");return t.addEventListener("click",()=>{n.classList.add("show")}),c.addEventListener("submit",a=>{a.preventDefault();const d={title:i.querySelector("#title").value.trim(),image:i.querySelector("#image").value.trim(),ingredients:i.querySelector("#ingredients").value.split(",").map(s=>s.trim()).filter(s=>s),steps:i.querySelector("#steps").value.split(".").map(s=>s.trim()).filter(s=>s)};e.push(d),localStorage.setItem("recipes",JSON.stringify(e)),c.reset(),n.classList.remove("show"),r(e)}),o.addEventListener("click",()=>{n.classList.remove("show")}),i}function b(e){const r=document.createElement("div");r.className="view-modal show",r.id="recipeModal",r.innerHTML=`
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
  `,r.querySelector("#closeViewBtn").addEventListener("click",()=>{r.remove()});const i=r.querySelectorAll(".accordion");return r.querySelectorAll(".accordion-toggle").forEach(t=>{t.addEventListener("click",()=>{i.forEach(o=>{o!==t.parentElement&&o.classList.remove("open")}),t.parentElement.classList.toggle("open")})}),r}function p(e,r){const i=document.createElement("div");i.classList.add("recipe-card"),i.innerHTML=`
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
  `;const n=i.querySelector(".card-title"),t=i.querySelector(".card-title-wrapper");return setTimeout(()=>{n.scrollWidth>t.clientWidth&&n.classList.add("scrolling")},0),i.querySelector(".view-btn").addEventListener("click",()=>{const o=b(e);document.body.appendChild(o),setTimeout(()=>{o.classList.add("show")},10)}),i.querySelector(".delete-btn").addEventListener("click",()=>{r(e.title)}),i}function y(e,r){const i=document.createElement("div");e.length===0?i.innerHTML=` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list">
        <p>Add some recipes</p>
        </div>
      </div>`:i.innerHTML=` <div id="recipes">
        <h3>Your Recipes</h3>
        <div id="recipeList" class="recipe-list"></div>
      </div>`;const n=i.querySelector("#recipeList");e.forEach(o=>{const c=p(o,t);n.appendChild(c)});function t(o){e=e.filter(c=>c.title!==o),localStorage.setItem("recipes",JSON.stringify(e)),r(e),e.lenght===0&&(n.innerHTML="<p>Add some recipes</p>")}return i}function L(){const e=document.createElement("div");return e.innerHTML=`
    <footer class="app-footer">
        <div class="footer-content">
            <p>&copy; 2025 <strong>RecipeBook</strong>. All rights reserved.</p>
        </div>
    </footer>`,e}const S=[{title:"Spaghetti Bolognese",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE7D-tDUIghCwFYbbZGj_D7CUAuKz6Alu6Q&s",ingredients:["Spaghetti","Ground Beef","Tomato Sauce","Onion","Garlic"],steps:["Boil spaghetti","Cook beef with onion and garlic","Add tomato sauce","Simmer until thickened","Mix with spaghetti and serve"]},{title:"Grilled Cheese Sandwich",image:"https://cdn.loveandlemons.com/wp-content/uploads/2023/01/grilled-cheese.jpg",ingredients:["Bread slices","Cheddar cheese","Butter"],steps:["Butter the bread","Place cheese between slices","Grill until golden brown on both sides"]},{title:"Pancakes",image:"https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",ingredients:["Flour","Eggs","Milk","Sugar","Baking Powder"],steps:["Mix dry ingredients","Add eggs and milk","Stir to form batter","Pour on a hot pan and flip when bubbles form","Serve with syrup"]}],l=document.getElementById("app");localStorage.setItem("recipes",JSON.stringify(S));const m=JSON.parse(localStorage.getItem("recipes"))||[];l.appendChild(g());l.appendChild(v(m,h));l.appendChild(f(m,w));l.appendChild(y(m,h));l.appendChild(L());function w(e){h(e)}function h(e){const r=document.querySelector("#recipeList");r.innerHTML="",e.forEach(n=>{const t=p(n,i);r.appendChild(t)});function i(n){e=e.filter(t=>t.title!==n),localStorage.setItem("recipes",JSON.stringify(e)),r.innerHTML="",e.forEach(t=>{const o=p(t,i);r.appendChild(o)}),e.lenght===0&&(r.innerHTML="<p>Add some recipes</p>")}}
