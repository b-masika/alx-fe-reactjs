import React from "react";
import useRecipeStore from "./recipeStore.js";

export default function FavoritesList() {
    const favorites = useRecipeStore((state) => state.favorites.map((id) => 
        state.recipes.find((recipe) => recipe.id === id))
);
    if (favorites.length === 0) {
        return <p>No favorite recipes yet.</p>;
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>My Favorite</h2>
            {favorites.map((recipe) => (
                <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
}