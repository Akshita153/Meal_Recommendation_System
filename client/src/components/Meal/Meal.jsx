import React from 'react'
import Navbar from '../Navbar/Navbar'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CalorieCalculator from './CalorieCalculator';
// import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';

import ChooseDiet from './ChooseDiet';
import './meal.css'

const Meal = () => {

  return (
    <div className="">
      <Navbar />

      {/* Welcome to the meal page */}
      <div className='meal'>
        <Box >
          <Grid container sx={{ textAlign: 'center' }}>


            <Grid item xs={12} sx={{ marginTop: '4rem', textAlign: 'center', }}>
              <h1 style={{ marginTop: '4rem', color: '#9e5931' }}>Importance of Calories in a Healthy Diet</h1>
              <br />
              <p style={{ margin: '3rem 16rem', }}>. You need energy from calories for your body to work properly. Your body uses this energy to function properly. To stay at around the same weight, the calories your body uses should be the same as the amount of calories you eat and drink.</p>
              <br />
              <br />
            </Grid>
            <Grid item xs={12} >

            </Grid>
          </Grid>
        </Box>

      </div>

      {/* calories display */}
      <Grid container>
        <Grid item xs={12}>
          <div className="marquee-container" >
            <marquee className="bar" direction="left" scrollamount="10">
              Acorn Squash 1/2 Squash 116 Calories  |  Apple 1 Medium 65 Calories  |  Apple 1 Large 100 Calories  |  Apricot 1 Medium 20 Calories | Artichoke 1 Medium 20 Calories | Asparagus 6 Spears 20 Calories | Avocado 1 Medium 255 Calories | Banana 1 Medium 50 Calories | Banana 1 Large 100 Calories | Bell Pepper 1 Medium 30 Calories | Blackberries 1 Cup 50 Calories | Blueberries 1 Cup 50 Calories | Broccoli 1 Cup 20 Calories | Brussels Sprouts 4 Sprouts 25 Calories | Butternut Squash 1/2 Squash 272 Calories | Cabbage 1 Cup 20 Calories | Cantaloupe 1 Slice 55 Calories | Carrot 1 Medium 55 Calories | Celery 1 Stick 5 Calories | Cherries 1 Cup 270 Calories | Corn 1 Cob 60 Calories | Cucumber 1 Medium 10 Calories | Eggplant 1 Cup 20 Calories | Grapefruit 1 Medium 20 Calories | Grapes 1 Large Bunch 310 Calories | Green Beans 1 Cup 30 Calories | Kale 1 Cup 50 Calories | Kiwi 1 Medium 40 Calories | Lettuce 1 Cup 5 Calories | Mango 1 Medium 100 Calories | Nectarine 1 Medium 30 Calories | Onions 1 Cup 30 Calories | Orange 1 Medium 80 Calories | Papaya 1 Medium 80 Calories | Peach 1 Medium 40 Calories | Pear 1 Medium 75 Calories | Peas 1 Cup 60 Calories | Pineapple 1 Cup 55 Calories | Plum 1 Medium 35 Calories | Potato 1 Medium 125 Calories | Radishes 1 Cup Sliced 19 Calories | Raspberries 1 Cup 35 Calories | Spaghetti Squash Whole Squash 165 Calories | Spinach 1 Cup 15 Calories | Strawberry 1 Large 10 Calories | Summer Squash 1 Medium 30 Calories | Sweet Potato 1 Medium 60 Calories | Tomato 1 Medium 20 Calories | Watermelon 1 Slice 70 Calories | Zucchini 1 Medium 30 Calories

            </marquee>
          </div>

        </Grid>
      </Grid>

      {/* Calorie calculator */}
      <CalorieCalculator />

     
      <ChooseDiet />
      

      <Footer/>

    </div>
  )
}

export default Meal
