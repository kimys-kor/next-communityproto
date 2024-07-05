import React from "react";

interface VolleyballTabProps {
  selectedLeague: string | null;
  setSelectedLeague: (league: string) => void;
}

const volleyballLeagues = ["Vleague(남)", "Vleague(여)"];

const VolleyballTab: React.FC<VolleyballTabProps> = ({
  selectedLeague,
  setSelectedLeague,
}) => {
  return (
    <div>
      <div className="flex flex-wrap justify-start px-2 py-4">
        {volleyballLeagues.map((league) => (
          <button
            key={league}
            onClick={() => setSelectedLeague(league)}
            className={`text-sm font-semibold cursor-pointer rounded-lg m-2 underline-offset-4  hover:text-black hover:underline ${
              selectedLeague === league
                ? "text-black underline"
                : "text-[#AAAAAA]"
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
