export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="flex justify-between items-center border-b py-2 cursor-pointer text-black hover:bg-gray-100"
    >
      <span>
        {name} ({category})
      </span>
      <span className="font-semibold">{quantity}</span>
    </li>
  );
}
