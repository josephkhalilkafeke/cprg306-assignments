export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center border-b py-2 text-black">
      <span>
        {name} ({category})
      </span>
      <span className="font-semibold">{quantity}</span>
    </li>
  );
}
