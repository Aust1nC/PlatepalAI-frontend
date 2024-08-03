export const fetchRandomRecipe = async () => {
  try {
    const response = await fetch("http://localhost:8080/recipes/random");

    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }

    return response.json();
  } catch (error) {
    throw new Error("Server error");
  }
};
