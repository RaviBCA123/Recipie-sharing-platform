import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div style={styles.container}>
      {/* Centered Header Section */}
      <div style={styles.centeredContent}>
        <h1 style={styles.title}>Welcome to RecipeLub</h1>
        <p style={styles.subtitle}>Discover and share delicious recipes from around the world!</p>
        <Link to="/add-recipe" style={styles.addRecipeButton}>Share Your Recipe</Link>
      </div>

      {/* Recipe Grid */}
      <div style={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <div key={recipe._id} style={styles.recipeCard}>
            <img
              src={recipe.imageUrl || 'https://via.placeholder.com/300'}
              alt={recipe.title}
              style={styles.recipeImage}
            />
            <div style={styles.recipeContent}>
              <h2 style={styles.recipeTitle}>{recipe.title}</h2>
              <p style={styles.recipeDescription}>
                <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
              </p>
              <Link to={`/recipe/${recipe._id}`} style={styles.viewRecipeButton}>
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9', 
    backgroundImage: 'url(/images/Biriyani.jpeg)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  centeredContent: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a semi-transparent background
    padding: '30px',
    borderRadius: '10px',
    color: 'white',
    width: '90%',
    maxWidth: '600px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color:'#FAF9F6',
    marginBottom: '20px',
  },
  addRecipeButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    transition: 'background 0.3s',
  },
  addRecipeButtonHover: {
    backgroundColor: '#0056b3',
  },
  recipeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  recipeImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  recipeContent: {
    padding: '20px',
  },
  recipeTitle: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333',
  },
  recipeDescription: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  viewRecipeButton: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
  },
};

export default Home;
