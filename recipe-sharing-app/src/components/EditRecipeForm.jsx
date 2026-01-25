import React, { useState } from "react";
import useRecipeStore from "./recipeStore.js";

export default function EditRecipeForm({ recipe }) {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const [editing, setEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert("Recipe title cannot be empty");
            return;
        }  

        const updatedRecipe = {
            id: recipe.id,
            title,
            description
        };

        updateRecipe(recipe.id, updatedRecipe);

        setEditing(false);
    };

    if (!editing) {
        return (
            <button
                onClick={() => setEditing(true)}
                style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginRight: '0.5rem'
                }}
            >
                Edit
            </button>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    marginBottom: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    marginBottom: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                }}
            />
            <button
                type="submit"
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Save
            </button>
            <button
                type="button"
                onClick={() => setEditing(false)}
                style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Cancel
            </button>
        </form>
    );
}