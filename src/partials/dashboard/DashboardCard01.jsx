import { Link } from "react-router-dom";
import EditMenu from "../../components/DropdownEditMenu";

function DashboardCard01({ cardData }) {
  return (
    <article className="flex flex-col  col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700">
      <header className="flex justify-between items-start p-8">
        <h3 className="text-4xl font-extrabold text-[var(--color-dark-blue)] dark:text-slate-100">
          {cardData.title}
        </h3>
        {/* Menu button */}
        <EditMenu align="right" className="relative inline-flex">
          <li>
            <Link
              className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              to="#0"
            >
              Option 1
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3"
              to="#0"
            >
              Option 2
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
              to="#0"
            >
              Remove
            </Link>
          </li>
        </EditMenu>
      </header>

      <div className="flex flex-col mb-10 mx-10">
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 ">Grundpreis</p>
        <p className="text-lg font-extrabold text-[var(--color-text-blue)] dark:text-slate-100 mb-4">
          180,00 €/Jahr
        </p>

        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 ">Arbeitspreis</p>
        <p className="text-lg font-extrabold text-[var(--color-text-blue)] dark:text-slate-100 pb-16">
          {cardData.arbeitspreis} ct/kWh
        </p>

        <p className="text-4xl font-extrabold text-[var(--color-dark-blue)] dark:text-slate-100 self-end ">
          {cardData.value} € <span className=" text-base">/ Monat</span>
        </p>
      </div>
    </article>
  );
}

export default DashboardCard01;
