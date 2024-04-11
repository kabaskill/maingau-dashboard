import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";

function Dashboard() {
  const cardData = {
    gas: {
      title: "MAINGAU GasKomfort",
      value: "79,00",
      arbeitspreis: "6,35",
      vorteile: [
        "Kurze Vertragslaufzeit",
        "Maximale Flexibilität",
        "Rabatte auf Internet-, Mobilfunk- & Autostromtarife",
      ],
    },
    strom: {
      title: "MAINGAU StromKomfort",
      value: "94,00",
      arbeitspreis: "27,13",
      vorteile: [
        "12 Monate Preisgarantie",
        "100% Ökostrom",
        "Rabatte auf Internet-, Mobilfunk- & Autostromtarife",
      ],
    },
    internet: {
      title: "250 MBit/s",
      subtitle: "DSL 250",
      value: "12,95",
      subtitle2: "13. - 24. Monat",
      hochPreis: "42,95",
      highlights: ["Internet-Flat", "bis zu 250 MBit/s Download", "bis zu 40 MBit/s Upload"],
    },
    mobilfunk: {
      title: "16 GB",
      subtitle: "LTE Allnet Flat 16GB",
      value: "8,99",
      subtitle2: "anstatt",
      hochPreis: "17,99",
      highlights: ["LTE-Highspeed", "Allnet Flat", "EU-Roaming"],
    },
  };

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <div className="grid grid-cols-12 gap-4">
        <DashboardCard01 cardData={cardData.gas} />
        <DashboardCard01 cardData={cardData.strom} />

        <DashboardCard04 />

        <DashboardCard02 cardData={cardData.internet} />
        <DashboardCard02 cardData={cardData.mobilfunk} />
        <DashboardCard02 cardData={cardData.mobilfunk} />
        <DashboardCard02 cardData={cardData.mobilfunk} />

        <DashboardCard03 />

        <DashboardCard05 />

        <DashboardCard06 />

        <DashboardCard07 />

        <DashboardCard08 />

        <DashboardCard09 />

        <DashboardCard10 />

        <DashboardCard11 />

        <DashboardCard12 />

        <DashboardCard13 />
      </div>
    </main>
  );
}

export default Dashboard;
