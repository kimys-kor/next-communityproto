import React from "react";

interface FootballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const footballLeagues = ["NFL", "CFL"];

const FootballTab: React.FC<FootballTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {footballLeagues.map((league) => (
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

export default FootballTab;
