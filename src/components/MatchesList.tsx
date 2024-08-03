import React from "react";
import { MatchesListProps } from "../types";
import { truncateString } from "../utils";

const MatchesList: React.FC<MatchesListProps> = ({
  matches,
  onSelectMatch,
}) => {
  const fallbackImageUrl = "https://placehold.co/600x400";

  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul className="h-[70vh] overflow-y-auto">
        {matches.map((match) => (
          <li key={match.recipe.id} className="mb-2">
            <button
              className="w-full rounded flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectMatch(match.recipe.id)}
            >
              <img
                src={
                  `http://127.0.0.1:8081/${match.recipe.imageUrl}` ||
                  fallbackImageUrl
                }
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
              <span>
                <h3 className="font-bold text-start">
                  {truncateString(match.recipe.name, 35)}
                </h3>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesList;
