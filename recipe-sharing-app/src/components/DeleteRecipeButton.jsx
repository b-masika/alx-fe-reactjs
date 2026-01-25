import React from "react";
import useRecipeStore from "./recipeStore.js";

export default function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipeId);
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            Delete
        </button>
    );
}