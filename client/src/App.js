//import Logo from './assets/icon.png'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import Meal from "./components/Meal/Meal";
import { UserContextProvider } from "./context/userContext";
import axios from "axios";
import Recipes from "./components/Recipes/Recipes";
import VegMeal from "./components/VegMeal/VegMeal";
import EggMeal from "./components/EggMeal/EggMeal";
import ChickenMeal from "./components/ChickenMeal/ChickenMeal";
import VeganMeal from "./components/VeganMeal/VeganMeal";
axios.defaults.withCredentials = true;


function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>

          <Route exact path='/' element={<Landing />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/about-us' element={<AboutUs />}></Route>
          <Route exact path='/meal' element={<Meal />}></Route>
          <Route exact path='/recipes' element={<Recipes/>}></Route>
          <Route exact path='/veg' element={<VegMeal />}></Route>
          <Route exact path='/egg' element={<EggMeal />}></Route>
          <Route exact path='/chicken' element={<ChickenMeal />}></Route>
          <Route exact path='/vegan' element={<VeganMeal />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
