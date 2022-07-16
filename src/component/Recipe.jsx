import React from "react";
import classes from '../style/recipe.module.css'

function Recipe({ title, image, calories, ingredients }) {
  const cal = calories.toFixed(2)
  return (
    <div className={classes.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{cal} calories</p>
      <img src={image} alt="" className={classes.image} />
    </div>
  );
}

export default Recipe;
