import React from "react";

interface BasketballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const basketballLeagues = ["NBA", "KBL", "CBA"];

const BasketballTab: React.FC<BasketballTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {basketballLeagues.map((league) => (
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

export default BasketballTab;
