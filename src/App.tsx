import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react";
import React, { useState } from "react";

const RecipeSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg pt-2">
      <div className="relative">
        <img
          src="http://192.168.0.10:8080/216e618b-db6b-461e-82f6-e3dc4c8ed814.jpeg"
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className="text-3xl font-bold">Recipe 1, Vietnamese</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-5">I want a software engineer job</p>
      </div>
      <div className="flex justify-center space-x-8 pb-4">
        <button
          className="bg-red-500 rounded-full p-4 text-white hover:bg-red-600"
          onClick={() => console.log("Left")}
        >
          <X size={24} />
        </button>
        <button
          className="bg-green-500 rounded-full p-4 text-white hover:bg-green-600"
          onClick={() => console.log("Right")}
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

const MatchesList = () => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {[
          {
            id: 1,
            name: "pho",
            imageUrl:
              "http://192.168.0.10:8080/216e618b-db6b-461e-82f6-e3dc4c8ed814.jpeg",
          },
          {
            id: 2,
            name: "egg fry rice",
            imageUrl:
              "http://127.0.0.1:8080/1e831a54-4269-46b5-8936-32403d482bd7.jpeg",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button className="w-full rounded flex items-center hover:bg-gray-100 cursor-pointer">
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

function App() {
  const [currentScreen, setCurrentScreen] = useState("recipe");

  const renderScreen = () => {
    switch (currentScreen) {
      case "recipe":
        return <RecipeSelector />;
      case "matches":
        return <MatchesList />;
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <nav className="flex justify-between">
          <User onClick={() => setCurrentScreen("recipe")} />
          <MessageCircle onClick={() => setCurrentScreen("matches")} />
        </nav>
        {renderScreen()}
      </div>
    </>
  );
}

export default App;
