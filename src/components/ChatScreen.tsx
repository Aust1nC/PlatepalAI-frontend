import React, { useState } from "react";
import { ChatProps } from "../types/chat";
import { sendMessage } from "../services/conversationService";

const ChatScreen: React.FC<ChatProps> = ({
  currentMatch,
  conversation,
  refreshState,
}) => {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim()) {
      await sendMessage(conversation.id, input);
      setInput("");
    }
    refreshState();
  };

  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold">Chat with {currentMatch.name}</h2>
      <div className="h-[50vh] order rounded overflow-y-auto mb-4 p-2">
        {conversation.messages.map((message, index) => (
          <div key={index}>
            <div className="mb-4 p-2 rounded bg-gray-100">
              {message.messageText}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border flex-1 rounded p-2 mr-2"
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white rounded p-2"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;
