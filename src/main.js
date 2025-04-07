import "./styles/style.css";
import "./styles/Header.css";
import "./styles/Hero.css";
import "./styles/RecipeForm.css";
import "./styles/RecipeCard.css";
import "./styles/RecipeView.css";
import "./styles/Footer.css";

import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { RecipeForm } from "./components/RecipeForm.js";
import { RecipeContainer } from "./components/RecipeContainer.js";
import { Footer } from "./components/Footer.js";

const app = document.getElementById("app");

let recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "https://dummyimage.com/400x300/cccccc/000000&text=Pizza",
    ingredients: [
      "Spaghetti",
      "Ground Beef",
      "Tomato Sauce",
      "Onion",
      "Garlic",
    ],
    steps: ["Boil spaghetti", "Cook beef", "Add sauce", "Combine and serve"],
  },
  {
    title: "Margherita Pizza",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpizza&psig=AOvVaw1NWFvtRND4NCt1BHyhpozu&ust=1744093069613000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD-8I-jxYwDFQAAAAAdAAAAABAE",
    ingredients: ["Pizza Dough", "Tomato", "Mozzarella", "Basil"],
    steps: ["Prepare dough", "Add toppings", "Bake in oven"],
  },
  {
    title: "Caesar Salad",
    image: "https://source.unsplash.com/400x300/?salad",
    ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    steps: ["Mix lettuce", "Add toppings", "Toss with dressing"],
  },
  {
    title: "Pancakes",
    image: "https://source.unsplash.com/400x300/?pancakes",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    steps: ["Mix batter", "Pour on pan", "Flip and cook"],
  },
];

app.appendChild(Header());
app.appendChild(Hero(recipes));
app.appendChild(RecipeForm(recipes));
app.appendChild(RecipeContainer(recipes));
app.appendChild(Footer());

