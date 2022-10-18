// import {BrowserRouter,Route,Switch} from "react-router-dom"
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/AddEdit";
import View from "./pages/View"
import Register from "./pages/register"
import Login from "./pages/login"
function App() {
  return (
    
    <BrowserRouter>
        <div className="App">
         <ToastContainer position="top-center"/> 


    <Routes>
      <Route path="/" element={<Login/>}/>  
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addcontact"  element={<AddEdit/>}/>
      <Route path="/update/:id"  element={<AddEdit/>}/>
      <Route path="/view/:id"  element={<View/>}/>

    </Routes>
   
    </div>
    </BrowserRouter>

   
  )



    
}




export default App;
