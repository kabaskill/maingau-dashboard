import { useEffect, useState } from "react";
import WelcomeBanner from "../partials/WelcomeBanner";

function Shop() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();

      setUserData(data[0]);
    };

    fetchData();
  }, []);

  if (!userData) {
    return "Loading...";
  }

  const wishlistItems = userData.wishlistItems;
  const shopItemsNeu = userData.shopItemsNeu;

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section>
        <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-2">Wishlist</h2>
        <ul className="grid grid-cols-5 gap-4">
          {wishlistItems.map((item) => (
            <li key={item.title} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md ">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col justify-between h-full"
              >
                <img src={item.image} alt={item.name} />
                <div className="flex flex-col flex-grow justify-end gap-4 mt-10">
                  <h3 className="text-lg font-extrabold text-[var(--color-text-blue)] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-blue)] font-extrabold">
                    <span className="bg-[var(--color-yellow)] rounded-full py-1 px-2">
                      {item.price}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mt-12 mb-2">New Items</h2>
        <ul className="grid grid-cols-5 gap-4">
          {shopItemsNeu.map((item) => (
            <li key={item.title} className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md ">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col justify-between h-full"
              >
                <img src={item.image} alt={item.name} />
                <div className="flex flex-col flex-grow justify-end gap-4 mt-10">
                  <h3 className="text-lg font-extrabold text-[var(--color-text-blue)] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[var(--color-text-blue)] font-extrabold">
                    <span className="bg-[var(--color-yellow)] rounded-full py-1 px-2">
                      {item.price}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Shop;
