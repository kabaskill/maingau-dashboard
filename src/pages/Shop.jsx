import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Shop() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="grid grid-cols-12 gap-4"></section>
    </main>
  );
}

export default Shop;
