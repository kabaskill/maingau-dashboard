import { Link } from "react-router-dom";
import WelcomeBanner from "../partials/WelcomeBanner";

function Tariffs() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="flex flex-wrap justify-center lg:justify-start">
        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0 ">
          <Link to="https://www.maingau-energie.de/mobilfunk/5G-Handytarife" className="">
            <img src="/images/5g.png" alt="mobilfunk-5g" />
          </Link>
        </div>

        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0 ">
          <Link to="https://www.maingau-energie.de/internet/glasfaser" className="">
            <img src="/images/glasfaser.png" alt="glasfaser" />
          </Link>
        </div>

        <div className="w-full lg:w-1/3 px-2 mb-4 lg:mb-0 ">
          <Link to="https://www.maingau-energie.de/e-mobilitaet" className="">
            <img src="/images/autostrom.png" alt="autostrom" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Tariffs;
