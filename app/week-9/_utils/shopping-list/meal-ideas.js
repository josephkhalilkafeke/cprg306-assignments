"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await res.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const results = await fetchMealIdeas(ingredient);
    setMeals(results);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]);

  return (
    <div className="bg-white p-4 rounded shadow max-w-lg text-black">
      <h2 className="text-xl font-bold mb-2">Meal Ideas for: {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="border-b py-1">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
