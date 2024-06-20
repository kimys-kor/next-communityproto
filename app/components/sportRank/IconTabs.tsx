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
import BaseballTab from "./BaseballTab";
import BasketballTab from "./BasketballTab";
import VolleyballTab from "./VolleyballTab";
import HockeyTab from "./HockeyTab";
import TennisTab from "./TennisTab";
import FootballTab from "./FootballTab";
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
      case "baseball":
        return (
          <BaseballTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      case "basketball":
        return (
          <BasketballTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      case "volleyball":
        return (
          <VolleyballTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      case "hockey":
        return (
          <HockeyTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      case "tennis":
        return (
          <TennisTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      case "football":
        return (
          <FootballTab
            selectedLeague={selectedLeague}
            setSelectedLeague={setSelectedLeague}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto p-4 bg-[#f7f8fa]/35 shadow-lg rounded-lg">
      <div className="flex justify-around ">
        {sports.map((sport) => (
          <div
            key={sport.id}
            onClick={() => {
              setSelectedSport(sport.id);
              if (sport.id === "soccer") {
                setSelectedLeague("EPL");
              } else if (sport.id === "baseball") {
                setSelectedLeague("MLB");
              } else if (sport.id === "basketball") {
                setSelectedLeague("NBA");
              } else if (sport.id === "volleyball") {
                setSelectedLeague("FIVB World League");
              } else if (sport.id === "hockey") {
                setSelectedLeague("NHL");
              } else if (sport.id === "tennis") {
                setSelectedLeague("ATP");
              } else if (sport.id === "football") {
                setSelectedLeague("NFL");
              } else {
                setSelectedLeague(null);
              }
            }}
            className={` ${
              selectedSport === sport.id ? "text-blue-500" : "text-gray-500"
            }`}
          >
            {sport.icon}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center">
        {selectedSport && (
          <div className="w-full">
            {renderSportTab()}
            {selectedLeague && (
              <div>
                <LeagueStandings league={selectedLeague} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IconTabs;
