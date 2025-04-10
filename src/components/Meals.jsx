import { useEffect, useState } from "react";
import MealItem from "./MealItem"

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function handleLoadedMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        console.log("Error fetching meals");
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    }

    handleLoadedMeals();
  }, []);

  console.log(loadedMeals);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => ( 
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
