import React from "react";

interface BaseballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const baseballLeagues = ["MLB", "Nippon Professional Baseball", "KBO League"];

const BaseballTab: React.FC<BaseballTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {baseballLeagues.map((league) => (
          <button
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={`px-4 py-2 ${
              selectedLeague === league ? "bg-blue-700" : "bg-blue-500"
            } text-white rounded-lg m-2`}
          >
            {league}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseballTab;
