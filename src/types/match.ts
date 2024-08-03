import { Recipe } from "./recipe";

export interface Match {
  id: string;
  recipe: Recipe;
  conversationId: string;
}

export type MatchesListProps = {
  onSelectMatch: (matchId: string) => void;
  matches: Match[];
};
