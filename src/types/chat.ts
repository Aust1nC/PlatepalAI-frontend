import { Recipe } from "./recipe";

export interface ChatMessage {
  messageText: string;
  authorId: string;
  messageTime: Date;
}

export interface Conversation {
  id: string;
  recipeId: string;
  messages: ChatMessage[];
}

export type ChatProps = {
  currentMatch: Recipe;
  conversation: Conversation;
  refreshState: () => void;
};
