import React from "react";
import { Heart, X } from "lucide-react";
import { RecipeSelectorProps } from "../types/recipe";
import { truncateString } from "../utils";

const RecipeSelector: React.FC<RecipeSelectorProps> = ({ recipe, onSwipe }) => {
  return recipe ? (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg pt-2">
      <div className="relative">
        <img
          src={`http://127.0.0.1:8081/${recipe.imageUrl}`}
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className="text-3xl font-bold">{recipe.name}</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-5">
          {truncateString(recipe.description, 150)}
        </p>
      </div>
      <div className="flex justify-center space-x-8 pb-4">
        <button
          className="bg-red-500 rounded-full p-4 text-white hover:bg-red-600"
          onClick={() => onSwipe(recipe.id, "left")}
        >
          <X size={24} />
        </button>
        <button
          className="bg-green-500 rounded-full p-4 text-white hover:bg-green-600"
          onClick={() => onSwipe(recipe.id, "right")}
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default RecipeSelector;
