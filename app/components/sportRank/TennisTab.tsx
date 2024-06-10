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
            className={`p-2 text-sm hover:bg-indigo-500 ${
              selectedLeague === league ? "bg-indigo-500" : "bg-indigo-200"
            } text-white rounded-lg m-2`}
          >
            {league}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TennisTab;
