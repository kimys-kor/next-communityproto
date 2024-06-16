import React from "react";

interface BaseballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const baseballLeagues = ["MLB", "NPB", "KBO"];

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
            className={`text-sm cursor-pointer rounded-lg m-2 hover:text-indigo-500 ${
              selectedLeague === league ? "text-indigo-500" : ""
            }  `}
          >
            {league}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BaseballTab;
