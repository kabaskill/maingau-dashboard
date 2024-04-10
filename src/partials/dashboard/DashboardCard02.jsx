import { useState } from "react";
import { Link } from "react-router-dom";
import EditMenu from "../../components/DropdownEditMenu";

// Import utilities
import BlueButton from "../../components/BlueButton";

function DashboardCard02({ cardData }) {
  const [showDetails, setShowDetails] = useState(false);

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
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 pb-10 ">
          {cardData.highlight}
        </p>

        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 ">13. - 24. Monat</p>
        <p className="text-lg font-extrabold text-[var(--color-text-blue)] dark:text-slate-100 pb-8">
          {cardData.hochPreis} €
        </p>

        <p className="text-4xl font-extrabold text-[var(--color-dark-blue)] dark:text-slate-100 self-end ">
          {cardData.value} <span className=" text-base">/ Monat</span>
        </p>
      </div>

      {/* {showDetails && (
        <div className="bg-[var(--color-bg-blue)] px-10 flex flex-col gap-4 py-8">
          <h4 className=" text-2xl font-extrabold text-[var(--color-text-blue)] ">Ihre Vorteile</h4>
          <ul className="flex flex-col gap-4">
            {cardData.vorteile.map((vorteil, index) => (
              <li key={index} className="flex flex-shrink-0 place-items-start ">
                <img
                  className="bg-[var(--color-yellow)] rounded-full filter-red-500 mr-4 flex-grow-0"
                  src="src\images\check-mark.svg"
                  alt="check-mark"
                  width={24}
                />
                <span className="font-bold text-[var(--color-text-blue)]"> {vorteil} </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="bg-white rounded-full grid mx-8 mt-8 mb-12">
        <BlueButton
          btnText={"Details"}
          handleClick={() => setShowDetails(!showDetails)}
          showIcon={false}
        />
      </div> */}
    </article>
  );
}

export default DashboardCard02;
