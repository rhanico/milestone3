// app.js
import React, { useState, useEffect } from "react";

function App() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/recipe/recipes") // Adjust the route to match your backend route
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data);
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
