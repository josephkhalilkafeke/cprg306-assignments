"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Added ${quantity} ${name} (${category})`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow flex space-x-2"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border border-gray-300 rounded p-1 text-black"
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        max="20"
        className="border border-gray-300 rounded p-1 w-16 text-black"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded p-1 text-black"
      >
        <option value="produce">produce</option>
        <option value="dairy">dairy</option>
        <option value="bakery">bakery</option>
        <option value="meat">meat</option>
        <option value="frozen">frozen</option>
        <option value="pantry">pantry</option>
        <option value="beverage">beverage</option>
        <option value="household">household</option>
        <option value="other">other</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}
