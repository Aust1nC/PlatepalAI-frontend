export const fetchRandomRecipe = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/recipes/random`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }

    return response.json();
  } catch (error) {
    throw new Error("Server error");
  }
};

export const saveSwipe = async (recipeId: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/matches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipeId }),
    });

    if (!response.ok) {
      throw new Error("Failed to save swipe");
    }
  } catch (error) {
    throw new Error("Server error");
  }
};

export const fetchMatches = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/matches`);

    if (!response.ok) {
      throw new Error("Failed to fetch matches");
    }
    return response.json();
  } catch (error) {
    throw new Error("Server error");
  }
};
