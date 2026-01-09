import React, { useState } from "react";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";

function Tabs() {
  const [activeTab, setActiveTab] = useState("g1");

  return (
    <div className="container mt-4">

      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "g1" ? "active" : ""}`}
            onClick={() => setActiveTab("g1")}
          >
            Gallery 1
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "g2" ? "active" : ""}`}
            onClick={() => setActiveTab("g2")}
          >
            Gallery 2
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      {activeTab === "g1" && <Gallery1 />}
      {activeTab === "g2" && <Gallery2 />}

    </div>
  );
}

export default Tabs;
