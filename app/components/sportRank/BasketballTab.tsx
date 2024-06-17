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
            className={`text-xs cursor-pointer rounded-lg m-2 hover:text-indigo-500 ${
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

export default BasketballTab;
