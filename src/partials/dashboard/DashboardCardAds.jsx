import { Link } from "react-router-dom";
import BlueButton from "../../components/BlueButton";

function DashboardCardAds({ cardData }) {
  return (
    <article className="flex flex-col  col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700">
      <img className=" rounded-t-2xl" src={cardData.image} alt="top-angebote" />
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

        <Link to="/tariffs" className="text-center py-2 rounded-lg font-semibold text-sm">
          <BlueButton btnText={cardData.btnText} showIcon={false} />
        </Link>
      </div>
    </article>
  );
}

export default DashboardCardAds;
