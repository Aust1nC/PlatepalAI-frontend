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
import { fetchConversation } from "./services/conversationService";
import { Recipe } from "./types/recipe";
import { Match } from "./types/match";
import { Conversation } from "./types/chat";

function App() {
  const [currentScreen, setCurrentScreen] = useState("recipe");
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentMatchAndConversation, setCurrentMatchAndConversation] =
    useState<{ matchRecipe: Recipe; conversation: Conversation }>({
      matchRecipe: {
        id: "",
        name: "",
        description: "",
        ingredients: [],
        instructions: [],
        type: "",
        cuisine: "",
        servings: "",
        imageUrl: null,
      },
      conversation: {
        id: "",
        recipeId: "",
        messages: [],
      },
    });

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

  const onSelectMatch = async (recipe: Recipe, conversationId: string) => {
    try {
      const conversation = await fetchConversation(conversationId);

      setCurrentMatchAndConversation({
        matchRecipe: recipe,
        conversation: conversation,
      });
      setCurrentScreen("chat");
    } catch (error) {
      console.log(error);
    }
  };

  const refreshChatState = async () => {
    const conversation = await fetchConversation(
      currentMatchAndConversation.conversation.id
    );
    setCurrentMatchAndConversation({
      matchRecipe: currentMatchAndConversation.matchRecipe,
      conversation: conversation,
    });
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
        return <MatchesList matches={matches} onSelectMatch={onSelectMatch} />;
      case "chat":
        return (
          <ChatScreen
            currentMatch={currentMatchAndConversation.matchRecipe}
            conversation={currentMatchAndConversation.conversation}
            refreshState={refreshChatState}
          />
        );
    }
  };

  return (
    <>
      {/* <div className="image-background">  */}
      <div className="max-w-md mx-auto mt-4">
        <nav className="flex justify-between mb-4">
          <User
            size={32}
            className="cursor-pointer hover:fill-slate-100"
            onClick={() => setCurrentScreen("recipe")}
          />
          <MessageCircle
            size={32}
            className="cursor-pointer hover:fill-slate-100"
            onClick={() => setCurrentScreen("matches")}
          />
        </nav>
        {renderScreen()}
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
