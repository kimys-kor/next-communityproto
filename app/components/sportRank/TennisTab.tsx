import React from "react";

interface TennisTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const tennisLeagues = ["ATP", "WTA", "Davis Cup"];

const TennisTab: React.FC<TennisTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {tennisLeagues.map((league) => (
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

export default TennisTab;
