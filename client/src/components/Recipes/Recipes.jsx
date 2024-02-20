import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
import "./Recipes.css";
import axios from "axios";

// ... (import statements)

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [mealType, setMealType] = useState("snack");
  const [recipes, setRecipes] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const YOUR_APP_ID = `2d5ed427`;
  const YOUR_APP_KEY = "73539c7d3bc65f67f57fc8a58cce7a76";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&mealType=${mealType}&cuisineType=indian`;

  const getRecipeInfo = async () => {
    try {
      let result;
      if (!query) {
        // Fetch default recipes when there is no search query
        result = await axios.get(`https://api.edamam.com/search?q=&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}&mealType=${mealType}&cuisineType=indian`);
      } else {
        result = await axios.get(url);
      }
      setRecipes(result.data.hits);
      console.log(result.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
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
            onChange={(e) => setHealthLabel(e.target.value)}
          >
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="egg-free">Egg Free</option>
            <option value="Dairy Free">Dairy Free</option>
            <option value="gluten-free">Gluten Free</option>
          </select>

          <select
            className="category"
            name="meal_ltypes"
            onChange={(e) => setMealType(e.target.value)}
          >
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
          gap: "20px", // Set gap between cards
          padding: "20px", // Add padding to container
        }}
      >
        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              width: "calc(20% - 50px)", // Set width for each card (20% of the container width minus gap)
              margin: "10px", // Set margin for each card
              height: "300px", // Set a fixed height for the card
              border: "1px solid #ccc", // Add a border
              borderRadius: "8px", // Add border-radius for rounded corners
              overflow: "hidden", // Hide overflow content
              boxShadow: hoveredIndex === index ? "0px 0px 20px rgba(0, 0, 0, 0.3)" : "0px 0px 10px rgba(0, 0, 0, 0.1)", // Add box-shadow
              transition: "box-shadow 0.3s ease", // Add transition effect
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
                      opacity: hoveredIndex === index ? 0.7 : 1, // Set opacity on hover
                    }}
                  />
                </a>
              </div>
              <div
                style={{
                  padding: "10px",
                  fontFamily: "Frank Ruhl Libre, Georgia, serif",
                  fontSize: "1.25rem",
                  lineHeight: "1.15",
                  color: "#222",
                  fontWeight: "400",
                  height: "30%",
                }}
              >
                <h5>{recipe["recipe"]["label"]}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Recipes;
