import useRecipeStore from "../store/recipeStore.js";


export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);
    const removeRecipe = useRecipeStore((state) => state.removeRecipe);

    return (
        <div>
            <h2>Recipe List</h2>

            {recipes.length === 0 && <p>No recipes yet.</p>}

            {recipes.map((recipe) => (
                <div key={recipe.id} style={{ marginBottom: '1rem' }}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    <button 
                        onClick={() => removeRecipe(recipe.id)}
                        style={{
                            backgroundColor:'red',
                            color: 'white',
                            padding:'0.5rem 1rem',
                            border:'none',
                            borderRadius:'4px',
                            cursor:'pointer'
                            }}
                        >
                            Delete
                        </button>
                </div>
            ))}
        </div>
    );
}