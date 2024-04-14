import { useState } from "react";
import WelcomeBanner from "../partials/WelcomeBanner";
import SimpleMap from "../partials/SimpleMap";

function RegionCheck() {
  const [coordinates, setCoordinates] = useState({ posX: 49.87, posY: 8.64 });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const street = e.target.elements.street.value;
    const hausnummer = e.target.elements.hausnummer.value;
    const city = e.target.elements.city.value;
    const plz = e.target.elements.plz.value;

    const address = `${street} ${hausnummer}, ${plz} ${city}`;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ posX: parseFloat(lat), posY: parseFloat(lon) });
      } else {
        console.error("Address not found");
      }
    } catch (error) {
      console.error("Failed to fetch data from the geocoding service", error);
    }
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="flex gap-4">
        <form
          className="  bg-white dark:bg-slate-700  grid grid-cols-[2fr_1fr] gap-6 p-8 w-2/5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl dark:text-white font-extrabold text-[var(--color-text-blue)] col-span-full mb-4">
            Check Glasfaser Availability
          </h3>

          <div className="flex flex-col  gap-2">
            <label htmlFor="street">Street</label>
            <input
              className="form-input"
              type="text"
              id="street"
              name="street"
              placeholder="Street"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="hausnummer">Hausnummer</label>
            <input
              className="form-input"
              type="number"
              id="hausnummer"
              name="hausnummer"
              placeholder="Hausnummer"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <input className="form-input" type="text" id="city" name="city" placeholder="City" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="plz">Postleitzahl</label>
            <input
              className="form-input"
              type="number"
              id="plz"
              name="plz"
              placeholder="Postleitzahl"
            />
          </div>

          <button
            className="btn-lg text-[var(--color-text-blue)] text-lg border-1 border-black hover:bg-[var(--color-dark-blue)]  col-span-2 mt-8 mb-2"
            type="button"
          >
            Make a Request
          </button>

          <button
            className="btn-lg bg-[var(--color-btn-blue)] text-white text-lg hover:bg-[var(--color-dark-blue)]  col-span-2  mb-2"
            type="submit"
          >
            Check Availability
          </button>
        </form>

        <div id="map" className="w-3/5 ">
          <SimpleMap posX={coordinates.posX} posY={coordinates.posY} />
        </div>
      </section>
    </main>
  );
}

export default RegionCheck;
