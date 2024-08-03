export interface Match {
  id: string;
  recipe: Recipe;
  conversationId: string;
}

export type MatchesListProps = {
  onSelectMatch: (matchId: string) => void;
  matches: Match[];
};

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  type: string;
  cuisine: string;
  servings: string;
  imageUrl: string | null;
}

export type RecipeSelectorProps = {
  recipe: Recipe | null;
  onSwipe: (recipeId: string, direction: string) => void;
};
