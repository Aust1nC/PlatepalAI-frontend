export const fetchConversation = async (conversationId: string) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/conversations/${conversationId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch conversation");
    }

    return response.json();
  } catch (error) {
    throw new Error("Server error");
  }
};

export const sendMessage = async (conversationId: string, message: string) => {
  try {
    const payload = {
      messageText: message,
      authorId: "1c6a1342-795e-471e-8f05-9aade7cd5fa2",
    };

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/conversations/${conversationId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
