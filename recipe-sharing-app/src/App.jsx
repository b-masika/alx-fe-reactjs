import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import SearchBar from './components/SearchBar.jsx';

export default function App() {
  return (
    <Router>
      <div style ={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Recipe Sharing App</h1>

        <Routes>
          <Route path='/' element={
            <>
              <AddRecipeForm />
              <SearchBar />
              <RecipeList />
            </>
          } />

          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}