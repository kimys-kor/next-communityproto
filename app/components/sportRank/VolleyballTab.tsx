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

export default VolleyballTab;
