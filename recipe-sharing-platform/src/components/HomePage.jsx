import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import recipesData from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Simulate fetching data from an API
        setRecipes(recipesData);
    }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Recipe Sharing Platform</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
                // Link to the recipe detail page
                <Link to={`/recipe/${recipe.id}`} key={recipe.id} className='block'>
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img 
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="w-full h-48 object-cover rounded-t-lg" 
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                            <p className="text-gray-600 mb-4">{recipe.summary}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default HomePage;