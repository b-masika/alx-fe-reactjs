import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from './recipeStore.js';
import EditRecipeForm from './EditRecipeForm.jsx';
import DeleteRecipeButton from './DeleteRecipeButton.jsx';

export default function RecipeDetails({ recipeId }) {
    const { id } = useParams();
    const recipe = useRecipeStore((state) => 
        state.recipes.find((r) => r.id === recipeId)
    );

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }
    
    return (
        <div style={{padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1rem'}}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>

            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
        </div>
    );
}