import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  const location = useLocation();
  const { pathname } = location;

  const greetingObj = {
    "/": "All products you own and more...",
    "/tariffs": "Special offers for you",
    "/region-check": "Check your region",
    "/shop": "Your shop with your prices",
    "/jobs": "Check out our job offers",
    "/settings": "Your account settings",
    "/help": "Help and support",
  };

  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/users");
      const data = await response.json();

      setUserName(data[0].vorname + " " + data[0].nachname);
    };

    fetchData();
  }, []);

  if (!userName) {
    return "Loading...";
  }

  return (
    <section className="relative bg-gradient-to-r from-indigo-200 to-indigo-400 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
        {greeting}, {userName ? userName : "User"}
      </h1>
      <p>{greetingObj[pathname]}</p>
    </section>
  );
}

export default WelcomeBanner;