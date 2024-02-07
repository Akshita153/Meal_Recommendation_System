//import Logo from './assets/icon.png'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import { UserContextProvider } from "./context/userContext";
import axios from "axios";
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

        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
