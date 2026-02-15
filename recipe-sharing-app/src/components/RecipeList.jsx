import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore.js";
import EditRecipeForm from "./EditRecipeForm.jsx";
import DeleteRecipeButton from "./DeleteRecipeButton.jsx";


export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.searchTerm ? state.filteredRecipes : state.recipes);
    const favorites = useRecipeStore((state) => state.favorites);
    const addFavorite = useRecipeStore((state) => state.addFavorite);
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);
    const deleteRecipe = useRecipeStore((state) => state.removeRecipe);

    const toggleFavorite = (recipeId) => {
        if (favorites.includes(recipeId)) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    };

    if (recipes.length === 0) {
        return <p>No recipes yet.</p>;
    }

    return (
        <div>
            <h2>Recipe List</h2>
            {recipes.map((recipe) => (
                <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                        <h3>{recipe.title}</h3>
                    </Link>
                    <p>{recipe.description}</p>

                    <button 
                        onClick={() => toggleFavorite(recipe.id)}
                        style={{
                            backgroundColor: favorites.includes(recipe.id) ? 'red' : 'blue',
                            color: 'white',
                            padding:'0.5rem 1rem',
                            border:'none',
                            borderRadius:'4px',
                            cursor:'pointer'
                        }}
                    >
                        {favorites.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
                    </button>

                    <EditRecipeForm recipe={recipe} />
                    <DeleteRecipeButton recipeId={recipe.id} />
                </div>
            ))}
        </div>
    );
}