import { Link } from "react-router-dom";
import WelcomeBanner from "../partials/WelcomeBanner";

function Help() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="flex gap-8 ">
        <article className="col-span-7 row-span-2 w-[55%]">
          <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-2">Telefon</h2>
          <div className=" bg-[var(--color-text-blue)] flex items-center  gap-8 p-8 rounded-xl">
            <img src="/images/kontakt-telefon.webp" alt="kontakt-telefon" />

            <div className="flex flex-col gap-4 py-4">
              <Link
                to="tel:08009898555"
                className="text-white text-lg font-bold dark:text-[var(--color-text-blue)]"
              >
                Strom & Gas <br />
                0800 9898 555 <br />
                <span className="text-base">Mo. - So. 6:00 - 22:00 Uhr</span>
              </Link>
              <Link
                to="tel:08009898666"
                className="text-white text-lg font-bold  dark:text-[var(--color-text-blue)]"
              >
                Internet & Telefon <br />
                0800 9898 666 <br />
                <span className="text-base">Mo. - Fr. 07:30 - 19:30 Uhr</span>
              </Link>
              <Link
                to="tel:08009898777"
                className="text-white  text-lg font-bold dark:text-[var(--color-text-blue)]"
              >
                Mobilfunk <br />
                0800 9898 777 <br />
                <span className="text-base">Mo. - Fr. 07:30 - 19:30 Uhr</span>
              </Link>
              <Link
                to="tel:08009898444"
                className="text-white  text-lg font-bold dark:text-[var(--color-text-blue)]"
              >
                Autostrom DE: <br />
                0800 9898 444 <br />
                <span className="text-base">Mo. - So. rund um die Uhr erreichbar</span>
              </Link>
              <Link
                to="tel:08009898444"
                className="text-white text-lg font-bold  dark:text-[var(--color-text-blue)]"
              >
                EU: <br />
                00800 10 00 13 00 <br />
                <span className="text-base">Mo. - So. rund um die Uhr erreichbar</span>
              </Link>
            </div>
          </div>
        </article>

        <article className="w-[45%] flex flex-col gap-8 ">
          <div>
            <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-2">
              Kontaktanfragen
            </h2>
            <div className=" bg-[var(--color-text-blue)] flex  gap-8 items-center p-4 rounded-xl">
              <img
                className="object-contain"
                src="/images/kontakt-anfrage.webp"
                alt="kontakt-anfrage"
              />

              <div className="flex flex-col justify-around gap-4 ">
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

          <div className=" bg-[var(--color-text-blue)] h-full p-4 rounded-xl flex justify-center items-center text-center">
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
