import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim() || ingredients.split("\n").length < 2) newErrors.ingredients = 'Please enter at least 2 ingredients, each on a new line';
    if (!instructions.trim() || instructions.split("\n").length < 1) newErrors.instructions = 'Please enter preparation steps';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

        console.log({
            title,
            ingredients: ingredients.split("\n"),
            instructions: instructions.split("\n")
        });

        setTitle('');
        setIngredients('');
        setInstructions('');
        alert('Recipe added successfully!');

        navigate('/');
    }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl md:text-3xl font-bold text-center mb-6 md:mb-8">Add a New Recipe</h1>
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-lg rounded-lg p-4 md:p-6 max-w-2xl mx-auto"
            >
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Ingredients (one per line)
                    </label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows="5"
                        className="w-full border border-gray-300 rounded px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

                {/* Instructions */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Instructions (one step per line)
                    </label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        rows="5"
                        className="w-full border border-gray-300 rounded px-3 py-2 md:px-4 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded hover:bg-blue-600 transition-colors"
                >
                    Add Recipe
                </button>
            </form>
        </div>
    );
};

export default AddRecipeForm;