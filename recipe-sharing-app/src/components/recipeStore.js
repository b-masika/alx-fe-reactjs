import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],

    addRecipe: (newRecipe) => 
        set((state) => ({ 
            recipes: [...state.recipes, newRecipe] })),
            
    removeRecipe: (id) => 
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id)
        })),

    setRecipes: (recipes) => 
        set({ recipes}),
    }));

export default useRecipeStore;   