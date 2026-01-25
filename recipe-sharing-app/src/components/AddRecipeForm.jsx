import { useState } from "react";
import useRecipeStore from "../store/recipeStore.js";

export default function AddRecipeForm() {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: make sure title is not empty
        if (!title.trim()) {
            alert("Recipe title cannot be empty");
        return;
        }

        // Create new recipe object
        const newRecipe = {
            id: Date.now(),
            title,
            description
        };

        // Add recipe to the store
        addRecipe(newRecipe);

        // Clear form fields
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <h2>Add New Recipe</h2>
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
            <textarea
                placeholder="Recipe Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
            <button type="submit" style={{
                backgroundColor:'blue',
                color: 'white',
                padding:'0.5rem 1rem',
                border:'none',
                borderRadius:'4px',
                cursor:'pointer'
            }}>
                Add Recipe
            </button>
        </form>
    );
}
