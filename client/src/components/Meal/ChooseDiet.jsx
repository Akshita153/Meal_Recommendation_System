import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import veg from "../../assets/vegg.png";
import nonveg from "../../assets/non.png";
import egg from "../../assets/egg.png";
import vegan from "../../assets/vegan.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChooseDiet = ({ totalCalories }) => {
  const navigate = useNavigate();

  const navigateToVegMeal = () => {
    // Use the navigate function to go to '/veg' with the state
    navigate("/veg", { state: { totalCalories: totalCalories } });
  };

  const navigateToEggMeal = () => {
    // Use the navigate function to go to '/veg' with the state
    navigate("/egg", { state: { totalCalories: totalCalories } });
  };

  const navigateToChickenMeal = () => {
    // Use the navigate function to go to '/veg' with the state
    navigate("/chicken", { state: { totalCalories: totalCalories } });
  };

  const navigateToVeganMeal = () => {
    // Use the navigate function to go to '/veg' with the state
    navigate("/vegan", { state: { totalCalories: totalCalories } });
  };

  return (
    <div>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(to right, #4be643, #f6fc3a, #c46f6a, #f72d2d)",
            marginBottom: "-0.5rem",
            padding: "1rem",
          }}
        >
          <h1 style={{ textAlign: "center", color: "black" }}>
            Get Your Meal Now!
          </h1>
        </div>
        <Grid container>
          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem",
              background: "linear-gradient(to bottom, #4be643, white)",
            }}
          >
            {/* Use Link to navigate to VegMeal and pass totalCalories as a prop */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img src={veg} style={{ height: "15rem" }} alt="" />
              <button
                type="button"
                className="btn btn-success"
                onClick={navigateToVegMeal}
              >
                Vegetarian
              </button>
            </Box>
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem",
              background: "linear-gradient(to bottom, #f6fc3a, white)",
            }}
          >
            
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img src={egg} style={{ height: "15rem" }} alt="" />
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ color: "white" }}
                  onClick={navigateToEggMeal}
                >
                  Egg
                </button>
              </Box>
            
          </Grid>

          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem",
              background: "linear-gradient(to bottom, #c46f6a, white)",
            }}
          >
           
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img src={vegan} style={{ height: "15rem" }} alt="" />
                <button
                  type="button"
                  className="btn "
                  style={{ backgroundColor: "#c46f6a", color: "white" }}
                  onClick={navigateToVeganMeal}
                >
                  Vegan
                </button>
              </Box>
            
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2rem",
              background: "linear-gradient(to bottom, #f72d2d, white)",
            }}
          >
            
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <img src={nonveg} style={{ height: "13.5rem" }} alt="" />
                <br />
                <button type="button" className="btn btn-danger" onClick={navigateToChickenMeal}>
                  Non Veg
                </button>
              </Box>
            
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ChooseDiet;
