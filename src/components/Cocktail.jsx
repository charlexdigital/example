import React from "react";
import cocktailImages from "./cocktailImages";


function Cocktail({ name, ingredients, instructions }) {
  console.log("Cocktail Name:", name);
  console.log("Image Source:", cocktailImages[name]);

  return (
    <div className="cocktail-card">
      <h2>{name}</h2>
      <img 
        src={cocktailImages[name] || `${process.env.PUBLIC_URL}/cocktail-images/no-image.jpg`}
        alt={name} 
        className="cocktail-image" 
      />
      <p>
        <strong>What you need:</strong>
        <br />
        {ingredients.join(", ")}
      </p>
      <br />
      <p>
        <strong>What you need to do:</strong>
        <br />
        {instructions}
      </p>
    </div>
  );
}

export default Cocktail;
