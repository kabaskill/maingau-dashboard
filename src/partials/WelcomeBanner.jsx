import useUser from "../utils/useUser";
import { useLocation } from "react-router-dom";

function WelcomeBanner() {
  const date = new Date();
  const hours = date.getHours();

  const { user, error, isLoading } = useUser(0);

  const location = useLocation();
  const { pathname } = location;

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading.....</div>;

  let greeting = "Guten Morgen";
  if (hours >= 12 && hours < 18) {
    greeting = "Guten Tag";
  } else if (hours >= 18 && hours < 24) {
    greeting = "Guten Abend";
  } else if (hours >= 24 || hours < 6) {
    greeting = "Gute Nacht";
  }

  const greetingObj = {
    "/": "Alle Produkte, die Sie besitzen und mehr...",
    "/tariffs": "Sonderangebote für Sie",
    "/region-check": "Überprüfen Sie Ihre Region",
    "/shop": "Ihr Geschäft mit Ihren Preisen",
    "/jobs": "Schauen Sie sich unsere Stellenangebote an",
    "/settings": "Ihre Kontoeinstellungen",
    "/help": "Hilfe und Unterstützung",
  };

  return (
    <section className="relative bg-gradient-to-r from-indigo-200 to-indigo-400 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
        {greeting}, {user ? user.vorname : "User"}
      </h1>
      <p>{greetingObj[pathname]}</p>
    </section>
  );
}

export default WelcomeBanner;
