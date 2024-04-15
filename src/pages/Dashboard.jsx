import useUser from "../../src/utils/useUser";
import WelcomeBanner from "../partials/WelcomeBanner";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCardAds from "../partials/dashboard/DashboardCardAds";

function Dashboard() {
  const { user, error, isLoading } = useUser(0);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading.....</div>;

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="grid grid-cols-12 gap-4">
        <DashboardCard01 cardData={user.cardData.gas} />
        <DashboardCard01 cardData={user.cardData.strom} />

        <DashboardCard04 />

        <DashboardCard02 cardData={user.cardData.internet} />
        <DashboardCard02 cardData={user.cardData.mobilfunk} />
        <DashboardCardAds cardData={user.cardData.ad1} />
        <DashboardCardAds cardData={user.cardData.ad2} />
      </section>
    </main>
  );
}

export default Dashboard;
