import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import "./Recipes.css";
import axios from "axios";

// ... (import statements)

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("");
  const [mealType, setMealType] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const YOUR_APP_ID = `3b4dc18e`;
  const YOUR_APP_KEY = "7a40e35113fcafab268078cc60625ae7";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&mealType=${mealType}&cuisineType=indian`;
  const url1 = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&cuisineType=indian`;


  const [displayedRecipes, setDisplayedRecipes] = useState(20); // State to track the number of displayed recipes
  
  // Modify the getRecipeInfo function to fetch the correct number of recipes based on displayedRecipes
  const getRecipeInfo = async () => {
    try {
      let result;
      if (!query && !mealType && !healthLabel) {
        // Fetch default recipes when there is no search query
        result = await axios.get(`https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&cuisineType=indian&to=${displayedRecipes}`);
      } else if(query) {
        result = await axios.get(`${url1}&to=${displayedRecipes}`);
      } else if(mealType && healthLabel){
        result = await axios.get(`${url}&to=${displayedRecipes}`);
      } else if(healthLabel && mealType){
        result = await axios.get(`${url}&mealType=${mealType}&health=${healthLabel}&to=${displayedRecipes}`);
      } else if(mealType){
        result = await axios.get(`${url}&mealType=${mealType}&to=${displayedRecipes}`);
      } else if(healthLabel){
        result = await axios.get(`${url}&health=${healthLabel}&to=${displayedRecipes}`);
      }
      
      setRecipes(result.data.hits);
      console.log(result.data.hits[0].recipe.dishType);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  
  // Modify the onSubmit function to reset the displayedRecipes when performing a new search
  const onSubmit = (e) => {
    e.preventDefault();
  setDisplayedRecipes(20); // Reset the number of displayed recipes
  if (query.trim() !== "") {
    // Call getRecipeInfo only if the query is not empty
    getRecipeInfo();
  }
  };
  
  useEffect(() => {
    // Fetch default recipes when the component mounts
    getRecipeInfo();
  }, [healthLabel, mealType]); // Add healthLabel and mealType as dependencies

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  const openRecipeUrl = (url) => {
    window.open(url, "_blank"); // Open the recipe URL in a new tab
  };

  // Function to fetch more recipes when "Show More" button is clicked
const showMoreRecipes = () => {
  setDisplayedRecipes(prevDisplayedRecipes => prevDisplayedRecipes + 10);
};

// Use useEffect to trigger getRecipeInfo when displayedRecipes changes
useEffect(() => {
  getRecipeInfo();
}, [displayedRecipes]);
  

  return (
    <div style={{ backgroundColor: "#fae2ce" }}>
     <Navbar />
      <br />
      <br />
      <br />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="20px"
      >
        <form className="app__searchForm" onSubmit={onSubmit}>
          <input
            className="app__input"
            type="text"
            placeholder="enter ingredient"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input className="app__submit" type="submit" value="Search" />
        </form>

        <div>
          <select
            className="category"
            name="health_labels"
            value={healthLabel}
            onChange={(e) => setHealthLabel(e.target.value)}
          >
            <option value="">None</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="egg-free">Egg Free</option>
            <option value="Dairy Free">Dairy Free</option>
            <option value="gluten-free">Gluten Free</option>
          </select>

          <select
            className="category"
            name="meal_types"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="">None</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px", 
          padding: "20px", 
        }}
      >
        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              width: "calc(20% - 50px)", 
              margin: "10px",
              height: "300px", 
              border: "1px solid #ccc", 
              borderRadius: "8px", 
              overflow: "hidden", 
              boxShadow: hoveredIndex === index ? "0px 0px 20px rgba(0, 0, 0, 0.3)" : "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add box-shadow
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onClick={() => openRecipeUrl(recipe.recipe.url)}
          >
            <div
              style={{
                backgroundColor: "white",
                height: "100%",
                width: "100%",
              }}
            >
              <div style={{ height: "70%" }}>
                <a
                  href={recipe["recipe"]["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={recipe["recipe"]["image"]}
                    alt={recipe["recipe"]["label"]}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: hoveredIndex === index ? 0.7 : 1, 
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  padding: "10px",
                  fontSize: "10rem",
                  fontFamily: "Frank Ruhl Libre, Georgia, serif",
                  lineHeight: "1.15",
                  color: "#222",
                  fontWeight: "400",
                  height: "30%",
                }}
              >
                <p>{recipe["recipe"]["label"]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
  <button style={{height: "40px"}} onClick={showMoreRecipes}>Show More</button>
</div>
    </div>
  );
};


export default Recipes;
