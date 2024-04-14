import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Tariffs() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="grid grid-cols-3" >
        <a href="https://www.maingau-energie.de/mobilfunk/5G-Handytarife" >
          <img src="src/images/5g.png" alt="mobilfunk-5g" />
        </a>

        <a href="https://www.maingau-energie.de/internet/glasfaser" >
          <img src="src/images/glasfaser.png" alt="glasfaser" />
        </a>

        <a href="https://www.maingau-energie.de/e-mobilitaet" >
          <img src="src/images/autostrom.png" alt="autostrom" />
        </a>
      </section>
    </main>
  );
}

export default Tariffs;
