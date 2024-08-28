import BookingOrder from '../components/BookingOrder';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-600 p-4">
        <h1 className="text-white text-3xl font-bold">HoverSprite</h1>
      </header>
      <main className="py-10">
        <BookingOrder />
      </main>
    </div>
  );
}
