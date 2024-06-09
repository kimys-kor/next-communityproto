import React from "react";

interface BasketballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const basketballLeagues = ["NBA", "EuroLeague", "CBA"];

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

export default BasketballTab;
