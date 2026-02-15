import React from "react";
import useRecipeStore from "./recipeStore.js";

export default function FavoritesList() {
    const recommendations = useRecipeStore((state) => state.recommendations.map);

    if (recommendations.length === 0) {
        return <p>No recommendations available at the moment.</p>;
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <h2>Recommended Recipes</h2>
            {recommendations.map((recipe) => (
                <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
}