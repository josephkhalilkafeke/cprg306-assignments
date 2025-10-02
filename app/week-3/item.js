
export default function Item({ name, quantity, category }) {
 return (
<li className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded p-3 mb-2 shadow-sm">
<span className="font-medium">{name}</span>
<span className="text-gray-500">{quantity} ({category})</span>
</li>
 );
}