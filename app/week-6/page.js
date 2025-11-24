import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
