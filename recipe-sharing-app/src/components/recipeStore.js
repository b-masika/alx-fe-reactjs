import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],
    searchTerm: '',
    filteredRecipes: [],

    setRecipes: (recipes) => 
        set((state) => ({
            recipes: recipes,
            filteredRecipes: recipes,
        })),

    addRecipe: (newRecipe) => 
        set((state) => {
            const updatedRecipes = [...state.recipes, newRecipe];
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) => 
                    (recipe.title || '').toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    updateRecipe: (updatedRecipe) => 
        set((state) => {
            const updatedRecipes = state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            );
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) => 
                    (recipe.title || '').toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),
            
    deleteRecipe: (id) => 
        set((state) => {
            const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
            return {
                recipes: updatedRecipes,
                filteredRecipes: updatedRecipes.filter((recipe) => 
                    (recipe.title || '').toLowerCase().includes(state.searchTerm.toLowerCase())
                ),
            };
        }),

    addFavorite: (recipeId) => 
        set((state) => ({
            favorites: [...state.favorites, recipeId]
        })),

    removeFavorite: (recipeId) => 
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId)
        })),

    setSearchTerm: (term) => 
        set((state) => ({
            searchTerm: term,
            filteredRecipes: state.recipes.filter((recipe) => 
                recipe.title.toLowerCase().includes(term.toLowerCase())
            ),
        })),

    generateRecommendations: () => 
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) => 
                    state.favorites.includes(recipe.id) && 
                    Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),

}));

export default useRecipeStore;   