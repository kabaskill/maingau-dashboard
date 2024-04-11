import React from "react";
import BarChart from "../../charts/BarChart01";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard04() {
  const chartData = {
    labels: [
      "09-01-2023",
      "10-01-2023",
      "11-01-2023",
      "12-01-2023",
      "01-01-2024",
      "02-01-2024",
      "03-01-2024",
      "04-01-2024",
    ],
    datasets: [
      // Light blue bars
      {
        label: "Gas",
        data: [-55, 10, 50, -40, 90, 70, 60, 20],
        backgroundColor: "#004bad",
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
      // Blue bars
      {
        label: "Strom",
        data: [20, 30, 35, -50, 40, 35, 30, 20],
        backgroundColor: "#ffe500",
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-2xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-[var(--color-text-blue)] dark:text-slate-100">
          Als MAINGAU-Kunde sparen Sie
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
