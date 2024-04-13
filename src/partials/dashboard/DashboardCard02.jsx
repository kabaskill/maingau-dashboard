import { Link } from "react-router-dom";
import EditMenu from "../../components/DropdownEditMenu";

function DashboardCard02({ cardData }) {
  return (
    <article className="flex flex-col  col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700">
      <header className="flex justify-between items-start p-8">
        <h3 className="text-4xl font-extrabold text-[var(--color-dark-blue)] dark:text-slate-100">
          <span className=" text-xl text-[var(--color-text-blue)]">
            {cardData.subtitle} <br />
          </span>
          {cardData.title}
        </h3>
        {/* Menu button */}
        <EditMenu align="right" className="relative inline-flex">
          <li>
            <Link
              className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              to="#0"
            >
              Upgrade
            </Link>
          </li>
     
          <li>
            <Link
              className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
              to="#0"
            >
              Störung?
             </Link>
          </li>
        </EditMenu>
      </header>

      <div className="bg-[var(--color-bg-blue)] px-10 flex flex-col gap-4 py-8">
        <ul className="flex flex-col gap-4">
          {cardData.highlights.map((highlight, index) => (
            <li key={index} className="flex flex-shrink-0 items-center ">
              <img
                className="bg-[var(--color-yellow)] rounded-full filter-red-500 mr-4 flex-grow-0"
                src="src\images\check-mark.svg"
                alt="check-mark"
                width={16}
              />
              <span className=" text-sm font-bold text-[var(--color-text-blue)]">
                {" "}
                {highlight}{" "}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-10 mx-10">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 pb-10 ">
          {cardData.highlight}
        </p>

        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 self-end ">
          {cardData.subtitle2}
        </p>
        <p className="text-base font-extrabold text-[var(--color-text-blue)] dark:text-slate-100  self-end pb-2">
          {cardData.hochPreis} € / Monat
        </p>

        <p className="text-4xl font-extrabold text-[var(--color-dark-blue)] dark:text-slate-100 self-end ">
          {cardData.value} € <span className=" text-base">/ Monat</span>
        </p>
      </div>
    </article>
  );
}

export default DashboardCard02;
