import BookingOrderPage from "@/components/orders/BookingOrderPage";

export default function Home() {
  return (
    <main className="flex text-black bg-white min-h-screen flex-col items-center justify-between p-24">
      {/* <HomePage /> */}
      <BookingOrderPage />
    </main>
  );
}
