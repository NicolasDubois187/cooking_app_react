import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <h3>{meal.strArea}</h3>
      <img src={meal.strMealThumb} alt="" />
      <a href={meal.strYoutube} target="_blank">
        Video
      </a>
    </div>
  );
};

export default Card;
