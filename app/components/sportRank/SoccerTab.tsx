import React from "react";

interface SoccerTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const soccerLeagues = [
  "EPL",
  "Bundesliga",
  "La Liga",
  "Serie A",
  "French Ligue 1",
  "Eredivisie",
  "K League 1",
  "K League 2",
];

const SoccerTab: React.FC<SoccerTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-around mb-4">
        {soccerLeagues.map((league) => (
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

export default SoccerTab;
