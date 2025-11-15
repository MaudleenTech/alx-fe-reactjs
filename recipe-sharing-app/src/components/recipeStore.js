import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
      filteredRecipes: [...state.recipes, newRecipe], // keep filtered updated
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
      };
    }),

  // NEW
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
}));
