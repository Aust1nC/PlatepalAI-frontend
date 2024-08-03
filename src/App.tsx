import "./App.css";
import { User, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import MatchesList from "./components/MatchesList";
import RecipeSelector from "./components/RecipeSelector";
import ChatScreen from "./components/ChatScreen";
import {
  fetchMatches,
  fetchRandomRecipe,
  saveSwipe,
} from "./services/recipeService";

function App() {
  const [currentScreen, setCurrentScreen] = useState("recipe");
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [matches, setMatches] = useState([]);

  const loadRandomProfile = async () => {
    try {
      const recipe = await fetchRandomRecipe();
      setCurrentRecipe(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMatches = async () => {
    try {
      const matches = await fetchMatches();
      setMatches(matches);
    } catch (error) {
      console.log(error);
    }
  };

  const onSwipe = async (recipeId: string, direction: string) => {
    loadRandomProfile();

    if (direction === "right") {
      await saveSwipe(recipeId);
      await loadMatches();
    }
  };

  useEffect(() => {
    loadRandomProfile();
    loadMatches();
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "recipe":
        return <RecipeSelector recipe={currentRecipe} onSwipe={onSwipe} />;
      case "matches":
        return (
          <MatchesList
            matches={matches}
            onSelectMatch={() => setCurrentScreen("chat")}
          />
        );
      case "chat":
        return <ChatScreen />;
    }
  };

  return (
    <>
      {/* <div className="image-background">  */}
      <div className="max-w-md mx-auto">
        <nav className="flex justify-between mb-4">
          <User onClick={() => setCurrentScreen("recipe")} />
          <MessageCircle onClick={() => setCurrentScreen("matches")} />
        </nav>
        {renderScreen()}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
