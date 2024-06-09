"use client";

import React, { useState } from "react";
import {
  FaFutbol,
  FaBaseballBall,
  FaBasketballBall,
  FaVolleyballBall,
  FaHockeyPuck,
  FaTableTennis,
  FaFootballBall,
} from "react-icons/fa";
import SoccerTab from "./SoccerTab";
import LeagueStandings from "./LeagueStandings";

const sports = [
  { id: "soccer", icon: <FaFutbol />, label: "Soccer" },
  { id: "baseball", icon: <FaBaseballBall />, label: "Baseball" },
  { id: "basketball", icon: <FaBasketballBall />, label: "Basketball" },
  { id: "volleyball", icon: <FaVolleyballBall />, label: "Volleyball" },
  { id: "hockey", icon: <FaHockeyPuck />, label: "Hockey" },
  { id: "tennis", icon: <FaTableTennis />, label: "Tennis" },
  { id: "football", icon: <FaFootballBall />, label: "Football" },
];

const IconTabs: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<string>("soccer");
  const [selectedLeague, setSelectedLeague] = useState<string | null>("EPL");

  const renderSportTab = () => {
    switch (selectedSport) {
      case "soccer":
        return (
          <SoccerTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      // Add other cases for different sports
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-around mb-4">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => {
              setSelectedSport(sport.id);
              if (sport.id === "soccer") {
                setSelectedLeague("EPL");
              } else {
                setSelectedLeague(null);
              }
            }}
            className={`p-2 ${
              selectedSport === sport.id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {sport.icon}
          </button>
        ))}
      </div>
      {selectedSport && (
        <div>
          {renderSportTab()}
          {selectedLeague && (
            <div>
              <h2 className="text-2xl mb-4 text-center">
                {selectedLeague} Standings
              </h2>
              <LeagueStandings league={selectedLeague} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IconTabs;
