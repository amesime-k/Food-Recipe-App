import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./component/Recipe";

function App() {
const APP_ID = process.env.REACT_APP_ID
const APP_KEY = process.env.REACT_APP_KEY

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    const fecthRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
console.log(APP_ID, APP_KEY);
    fecthRecipe();
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFormSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleFormSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleSearch}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipe">

      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
