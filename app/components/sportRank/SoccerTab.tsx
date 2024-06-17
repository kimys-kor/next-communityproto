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
          <span
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={`text-xs cursor-pointer rounded-lg m-2 hover:text-indigo-500 ${
              selectedLeague === league ? "text-indigo-500" : ""
            }  `}
          >
            {league}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SoccerTab;
