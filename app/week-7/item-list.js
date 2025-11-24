"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="max-w-xl w-full bg-white p-6 rounded shadow text-black">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded ${sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded ${sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((i) => (
          <Item
            key={i.id}
            name={i.name}
            quantity={i.quantity}
            category={i.category}
          />
        ))}
      </ul>
    </div>
  );
}
