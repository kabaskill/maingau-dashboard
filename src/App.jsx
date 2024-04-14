import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
import "./charts/ChartjsConfig";

import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";

// Import pages
import Dashboard from "./pages/Dashboard";
import Tariffs from "./pages/Tariffs";
import Jobs from "./pages/Jobs";
import RegionCheck from "./pages/RegionCheck";
import Shop from "./pages/Shop";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function App() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); 

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/tariffs" element={<Tariffs />} />
            <Route exact path="/region-check" element={<RegionCheck />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
