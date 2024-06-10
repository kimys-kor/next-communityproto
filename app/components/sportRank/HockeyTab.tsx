import React from "react";

interface HockeyTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const hockeyLeagues = ["NHL", "KHL", "SHL"];

const HockeyTab: React.FC<HockeyTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {hockeyLeagues.map((league) => (
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

export default HockeyTab;
