import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Existing actions
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedList = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedList,
        filteredRecipes: updatedList,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedList = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedList,
        filteredRecipes: updatedList,
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  // NEW: Favorites & Recommendations
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          state.favorites.length > 0 &&
          Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
