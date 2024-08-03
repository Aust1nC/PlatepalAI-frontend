import "./App.css";
import { User, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import MatchesList from "./components/MatchesList";
import RecipeSelector from "./components/RecipeSelector";
import ChatScreen from "./components/ChatScreen";
import { fetchRandomRecipe, saveSwipe } from "./services/recipeService";

function App() {
  const [currentScreen, setCurrentScreen] = useState("recipe");
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const loadRandomProfile = async () => {
    try {
      const recipe = await fetchRandomRecipe();
      setCurrentRecipe(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  const onSwipe = (recipeId: string, direction: string) => {
    if (direction === "right") {
      saveSwipe(recipeId);
    }
    loadRandomProfile();
  };

  useEffect(() => {
    loadRandomProfile();
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case "recipe":
        return <RecipeSelector recipe={currentRecipe} onSwipe={onSwipe} />;
      case "matches":
        return <MatchesList onSelectMatch={() => setCurrentScreen("chat")} />;
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
