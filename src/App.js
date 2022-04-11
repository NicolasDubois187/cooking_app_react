import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectInput, setSelectInput] = useState("Sélectionner un truc");
  const areas = [
    "Sélectionner un truc",
    "French",
    "Italian",
    "Croatian",
    "Indian",
    "British",
    "Chinese",
  ];
  const deleteCriteria = () => {
    setSelectInput("Sélectionner un truc");
    setSearchInput("");
  };

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput
      )
      .then((res) => setMealsData(res.data.meals));
  }, [searchInput]);
  return (
    <div className="mealContainer">
      <h2>A vos assiettes !!</h2>
      <p>à la carte</p>
      <div className="input">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select onChange={(e) => setSelectInput(e.target.value)}>
          {areas.map((area) => (
            <option
              key={area}
              value={area}
              selected={area === selectInput ? "selected" : null}
            >
              {area}
            </option>
          ))}
        </select>
        <button onClick={() => deleteCriteria()}>Effacer critères</button>
      </div>

      <div className="cookContainer">
        {mealsData ? (
          mealsData
            .filter((meal) => {
              if ("Sélectionner un truc" === selectInput) {
                return meal;
              } else {
                return meal.strArea.includes(selectInput);
              }
            })
            .map((meal) => <Card meal={meal} key={meal.idMeal} />)
        ) : (
          <p>Aucun résultat</p>
        )}
      </div>
    </div>
  );
};

export default App;
