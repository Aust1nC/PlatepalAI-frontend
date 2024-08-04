import { Recipe } from "./recipe";

export interface Match {
  id: string;
  recipe: Recipe;
  conversationId: string;
}

export type MatchesListProps = {
  matches: Match[];
  onSelectMatch: (matchRecipe: Recipe, conversationId: string) => void;
};
