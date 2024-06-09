import React from "react";

interface LeagueStandingsProps {
  league: string;
}

const standings = [
  {
    rank: 1,
    team: "Team A",
    games: 30,
    wins: 20,
    draws: 5,
    losses: 5,
    points: 65,
  },
  {
    rank: 2,
    team: "Team B",
    games: 30,
    wins: 18,
    draws: 7,
    losses: 5,
    points: 61,
  },
  // Add more teams as needed
];

const LeagueStandings: React.FC<LeagueStandingsProps> = ({ league }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Rank</th>
            <th className="py-2">Team</th>
            <th className="py-2">Games</th>
            <th className="py-2">Wins</th>
            <th className="py-2">Draws</th>
            <th className="py-2">Losses</th>
            <th className="py-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.rank}>
              <td className="py-2 text-center">{team.rank}</td>
              <td className="py-2 text-center">{team.team}</td>
              <td className="py-2 text-center">{team.games}</td>
              <td className="py-2 text-center">{team.wins}</td>
              <td className="py-2 text-center">{team.draws}</td>
              <td className="py-2 text-center">{team.losses}</td>
              <td className="py-2 text-center">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueStandings;
