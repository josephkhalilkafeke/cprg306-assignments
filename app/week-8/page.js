"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(name) {
    const cleanName = name.split(",")[0].replace(/\p{Emoji_Presentation}/gu, "").trim();
    setSelectedItemName(cleanName);
  }

  return (
    <main className="flex flex-col md:flex-row gap-6 p-6 min-h-screen bg-black text-white">
      <div className="flex flex-col gap-4 md:w-1/2">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="md:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
