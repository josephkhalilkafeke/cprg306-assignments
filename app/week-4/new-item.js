"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="flex items-center justify-center bg-white p-2 rounded shadow">
      <input
        type="text"
        readOnly
        value={quantity}
        className="w-10 text-center border border-gray-300 rounded text-black font-medium"
      />

      <div className="flex space-x-1 ml-2">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-blue-500 text-white w-8 h-8 rounded disabled:opacity-50 flex items-center justify-center hover:bg-blue-600"
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 text-white w-8 h-8 rounded disabled:opacity-50 flex items-center justify-center hover:bg-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

