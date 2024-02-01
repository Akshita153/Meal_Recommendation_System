//import Logo from './assets/icon.png'
import React from "react";
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom"
import Landing from './components/Landing/Landing';
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing />}></Route>
          <Route exact path='/register' element={<Register />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
