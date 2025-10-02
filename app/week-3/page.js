import ItemList from "./item-list";
export default function Page() {
 return (
<main className="max-w-xl mx-auto p-6">
<h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
       Shopping List
</h1>
<ItemList />
</main>
 );
}