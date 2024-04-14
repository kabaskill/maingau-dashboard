import WelcomeBanner from "../partials/WelcomeBanner";

function Shop() {
  const wishlistItems = [
    {
      title: "AOC 27G2U5BK ",
      image: "src/images/wishlist1.jpg",
      price: "151,96 €",
      link: "https://shop.maingau-energie.de/multimedia-technik/home-office/monitore/aoc-27g2u5bk?c=242",
    },
    {
      title: "Kodak Astro Zoom AZ528 mitternacht blau",
      image: "src/images/wishlist2.jpg",
      price: "238,65 €",
      link: "https://shop.maingau-energie.de/multimedia-technik/kamera-foto/kodak-astro-zoom-az528-mitternacht-blau?c=29",
    },
    {
      title: "Logitech Gaming Mouse PRO X SUPERLIGHT Black",
      image: "src/images/wishlist3.jpg",
      price: "91,08 €",
      link: "https://shop.maingau-energie.de/multimedia-technik/home-office/tastaturen-maeuse/logitech-gaming-mouse-pro-x-superlight-black?c=240",
    },
    {
      title: "Nintendo Switch Neon-Rot / Neon-Blau (neues Modell 2019)",
      image: "src/images/wishlist4.png",
      price: "323,80 € ",
      link: "https://shop.maingau-energie.de/multimedia-technik/gaming/konsolen/nintendo-switch-neon-rot/neon-blau-neues-modell-2019?c=35",
    },
    {
      title: "Sennheiser RS 120-W ",
      image: "src/images/wishlist5.jpg",
      price: "104,40 €",
      link: "https://shop.maingau-energie.de/multimedia-technik/kopfhoerer/over-ear/sennheiser-rs-120-w?c=51",
    },
  ];

  const shopItemsNeu = [
    {
      title: "Bosch MCM4200 Food Processor",
      image: "src/images/neu1.jpg",
      price: "70,20 €",
      link: "https://shop.maingau-energie.de/haushalt/kueche/kuechenkleingeraete/kuechenmaschinen/bosch-mcm4200-food-processor",
    },
    {
      title: "Makita VC2512L Industriestaubsauger",
      image: "src/images/neu2.jpg",
      price: "152,25 €",
      link: "https://shop.maingau-energie.de/haushalt/staubsauger-reiniger/nass-trockensauger/makita-vc2512l-industriestaubsauger",
    },
    {
      title: "ProfiCare Proficare PC-HAS 3011 braun",
      image: "src/images/neu3.jpg",
      price: "18,42 €",
      link: "https://shop.maingau-energie.de/haushalt/koerperpflege/haarpflege/proficare-proficare-pc-has-3011-braun",
    },
    {
      title: "Shark HD352DE SpeedStyle, Gloss Finish ",
      image: "src/images/neu4.jpg",
      price: "213,89 €",
      link: "https://shop.maingau-energie.de/haushalt/koerperpflege/haarpflege/shark-hd352de-speedstyle-gloss-finish",
    },
    {
      title: "Ansmann WFL800S 10W/800lm LED-Strahler mit Bewegungsmelder ",
      image: "src/images/neu5.jpg",
      price: "21,62 €",
      link: "https://shop.maingau-energie.de/heimwerken-garten/zubehoer/beleuchtung/ansmann-wfl800s-10w/800lm-led-strahler-mit-bewegungsmelder",
    },
  ];

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
