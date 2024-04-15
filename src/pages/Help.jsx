import { Link } from "react-router-dom";
import WelcomeBanner from "../partials/WelcomeBanner";

function Help() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <WelcomeBanner />

      <section className="flex flex-col lg:flex-row gap-8">
        <article className="w-full lg:w-2/3">
          <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-2">Telefon</h2>
          <div className="bg-[var(--color-text-blue)] flex flex-col gap-4 p-4 rounded-xl">
            <div className="flex gap-8 items-center">
              <img src="/images/kontakt-telefon.webp" alt="kontakt-telefon" />

              <div className="flex flex-col gap-4">
                <Link to="tel:08009898555" className="text-white text-lg font-bold">
                  Strom & Gas <br />
                  0800 9898 555 <br />
                  <span className="text-base">Mo. - So. 6:00 - 22:00 Uhr</span>
                </Link>
                <Link to="tel:08009898666" className="text-white text-lg font-bold ">
                  Internet & Telefon <br />
                  0800 9898 666 <br />
                  <span className="text-base">Mo. - Fr. 07:30 - 19:30 Uhr</span>
                </Link>
                <Link to="tel:08009898777" className="text-white text-lg font-bold">
                  Mobilfunk <br />
                  0800 9898 777 <br />
                  <span className="text-base">Mo. - Fr. 07:30 - 19:30 Uhr</span>
                </Link>
                <Link to="tel:08009898444" className="text-white text-lg font-bold">
                  Autostrom DE: <br />
                  0800 9898 444 <br />
                  <span className="text-base">Mo. - So. rund um die Uhr erreichbar</span>
                </Link>
                <Link to="tel:08009898444" className="text-white text-lg font-bold ">
                  EU: <br />
                  00800 10 00 13 00 <br />
                  <span className="text-base">Mo. - So. rund um die Uhr erreichbar</span>
                </Link>
              </div>
            </div>
          </div>
        </article>

        <article className="w-full lg:w-1/3">
          <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-2">Kontaktanfragen</h2>
          <div className="bg-[var(--color-text-blue)] flex flex-col gap-4 p-4 rounded-xl">
            <div className="flex gap-8 items-center">
              <img
                className="object-contain"
                src="/images/kontakt-anfrage.webp"
                alt="kontakt-anfrage"
              />

              <div className="flex flex-col gap-4 justify-around">
                <Link
                  to="https://www.maingau-energie.de/service/formulare/kontaktanfrage"
                  className="text-white font-bold text-xl"
                >
                  Strom & Gas
                </Link>
                <Link
                  to="https://www.maingau-energie.de/service/formulare/kontaktanfrage-internet"
                  className="text-white font-bold text-xl"
                >
                  Internet & Telefon
                </Link>
                <Link
                  to="https://www.maingau-energie.de/service/formulare/kontaktanfrage-mobilfunk"
                  className="text-white font-bold text-xl"
                >
                  Mobilfunk
                </Link>
                <Link
                  to="https://www.maingau-energie.de/service/formulare/kontaktanfrage-autostrom"
                  className="text-white font-bold text-xl"
                >
                  Autostrom
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-text-blue)] mt-4 p-4 rounded-xl flex items-center justify-center text-center">
            <Link to="https://wa.me/49610495195000" className="text-white font-bold text-2xl">
              Schreibe uns auf WhatsApp <br /> <br />
              <span>+49 6104 9519 5000</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Help;
