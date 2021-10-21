function navbar() {
  return `<div id="logo">
    <img
      src="https://i.pinimg.com/originals/01/48/66/0148662247327a7d268ce7d02b8662cf.png"
      alt=""
    />
  </div>
  <button id="search_btn">
  <a href="search.html">Search Recipe</a>
  
  </button>
  
  <button id="day_recipe">
  <a href="recipe_of_the_day.html">Recipe of the day</a>
  
  </button>

  <button id="latest_recipe">
  <a href="latest_recipe.html">Latest Recipes</a></button>
  <button class="material-icons-outlined">account_circle</button>`;
}

export default navbar;
