import React from "react";

interface VolleyballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const volleyballLeagues = [
  "FIVB World League",
  "CEV Champions League",
  "Superlega",
];

const VolleyballTab: React.FC<VolleyballTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {volleyballLeagues.map((league) => (
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

export default VolleyballTab;
