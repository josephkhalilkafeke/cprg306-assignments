"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).slice(2),
      name,
      quantity,
      category
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow flex space-x-2 text-black"
    >
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        className="border border-gray-300 rounded p-1"
      />

      <input
        type="number"
        value={quantity}
        min="1"
        max="20"
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border border-gray-300 rounded p-1 w-16"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded p-1"
      >
        <option value="produce">produce</option>
        <option value="dairy">dairy</option>
        <option value="bakery">bakery</option>
        <option value="meat">meat</option>
        <option value="frozen">frozen</option>
        <option value="canned goods">canned goods</option>
        <option value="dry goods">dry goods</option>
        <option value="household">household</option>
        <option value="other">other</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-3 rounded"
      >
        +
      </button>
    </form>
  );
}
