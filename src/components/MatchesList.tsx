import React from "react";
import { MatchesListProps } from "../types";

const MatchesList: React.FC<MatchesListProps> = ({ onSelectMatch }) => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {[
          {
            id: "1",
            name: "Cha Beo",
            imageUrl:
              "http://192.168.0.10:8081/216e618b-db6b-461e-82f6-e3dc4c8ed814.jpeg",
          },
          {
            id: "2",
            name: "egg fry rice",
            imageUrl:
              "http://127.0.0.1:8081/1e831a54-4269-46b5-8936-32403d482bd7.jpeg",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button
              className="w-full rounded flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelectMatch(match.id)}
            >
              <img
                src={match.imageUrl}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
              <span>
                <h3 className="font-bold">{match.name}</h3>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchesList;
