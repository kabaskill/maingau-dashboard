import { useState, useEffect } from "react";
import WelcomeBanner from "../partials/WelcomeBanner";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCardAds from "../partials/dashboard/DashboardCardAds";

function Dashboard() {

  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();

      setCardData(data[0].cardData);
    };

    fetchData();
  }, []);

  if (!cardData) {
    return "Loading...";
  }

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="grid grid-cols-12 gap-4">
        <DashboardCard01 cardData={cardData.gas} />
        <DashboardCard01 cardData={cardData.strom} />

        <DashboardCard04 />

        <DashboardCard02 cardData={cardData.internet} />
        <DashboardCard02 cardData={cardData.mobilfunk} />
        <DashboardCardAds cardData={cardData.ad1} />
        <DashboardCardAds cardData={cardData.ad2} />
      </section>
    </main>
  );
}

export default Dashboard;
