import React from "react";

interface SoccerTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const soccerLeagues = [
  "EPL",
  "분데스리가",
  "라리가",
  "세리에A",
  "프랑스리그1",
  "에레디비지",
  "k리그1",
  "K리그2",
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

export default SoccerTab;
