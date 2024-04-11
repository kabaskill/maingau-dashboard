import React from "react";

function WelcomeBanner() {
  const date = new Date();
  const hours = date.getHours();

  let greeting = "Good morning";
  if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
  } else if (hours >= 18 && hours < 24) {
    greeting = "Good evening";
  } else if (hours >= 24 || hours < 6) {
    greeting = "Good night";
  }

  return (
    <section className="relative bg-gradient-to-r from-indigo-200 to-indigo-400 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
        {greeting}, USER_NAME
      </h1>
      <p className="dark:text-indigo-200">All products you own and more...</p>
    </section>
  );
}

export default WelcomeBanner;
