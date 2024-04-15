import { Link } from "react-router-dom";
import WelcomeBanner from "../partials/WelcomeBanner";
import BlueButton from "../components/BlueButton";

function Jobs() {
  const jobsData = {
    highlights: [
      "Innovativer Workspace",
      "Motiviertes Team",
      "Spannende Aufgaben",
      "Vielfältige Mitarbeiter-Benefits",
    ],
    btnText: "Jetzt Karriere machen",
  };
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto b">
      <WelcomeBanner />

      <section className="grid grid-cols-3 gap-12 h-1/5">
        <article className="col-span-1 flex flex-col justify-between">
          <h2 className="h2 text-[var(--color-text-blue)] dark:text-white mb-4">Jobs bei MAINGAU</h2>
          <p className="text-lg text-[var(--color-text-blue)] dark:text-white  mb-12">
            Ob Schüler, Student oder Professional - wir haben die passende Stelle. Einfach in
            unserem Karriere-Portal umschauen und bewerben.
          </p>
          <ul className="flex flex-col gap-4 justify-between ">
            {jobsData.highlights.map((highlight, index) => (
              <li key={index} className="flex flex-shrink-0 items-center ">
                <img
                  className=" rounded-full filter-red-500 mr-4 flex-grow-0"
                  src="../images/check-mark.svg"
                  alt="check-mark"
                  width={24}
                />
                <span className=" text-sm font-bold text-[var(--color-text-blue)]">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
          <Link
            to="https://www.maingau-energie.de/karriere"
            className=" py-2 rounded-lg font-semibold text-sm"
          >
            <BlueButton btnText={jobsData.btnText} showIcon={false} />
          </Link>
        </article>
        <img src="../images/jobs.webp" alt="jobs" className="col-span-2 rounded-3xl" />
      </section>
    </main>
  );
}

export default Jobs;
