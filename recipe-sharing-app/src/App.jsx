import React from 'react';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';

export default function App() {
  return (
      <div style ={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Recipe Sharing App</h1>

        <AddRecipeForm />

        <RecipeList />
      </div>
  );
}