// import {BrowserRouter,Route,Switch} from "react-router-dom"
import React from "react";
import { BrowserRouter, Routes, Route, Redirect, Navigate } from "react-router-dom";
import Home from "./pages/home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/AddEdit";
import View from "./pages/View"
import Register from "./pages/register"
import Login from "./pages/login"
import { persister, store } from "./reactredux/store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import EducationDetails from "./pages/educationDetails";
import EmployeeDetails from "./pages/employeeDetails"
function App() {

  console.log("herloo")
  const redux = useSelector((user) => user)
  console.log("redux", redux)
  return (

    <BrowserRouter>
      <div style={{
        backgroundolor:"#E2EDEE",
        textAlign: "center"
      }}>
        <ToastContainer position="top-center" />


        <Routes>
       
          <Route path="/Home" element={redux?.userReducer?.user?.user?.token != null ? <Home /> : <Navigate to="/" />} />
          <Route path="/admin/contact" element={redux?.userReducer?.user?.user?.token != null ? <AddEdit /> : <Navigate to="/" />} />
          <Route path="/update/:id" element={redux?.userReducer?.user?.user?.token!= null ? <AddEdit /> : <Navigate to="/" />} />
          <Route path="/view/:id" element={redux?.userReducer?.user?.user?.token != null ? <View /> : <Navigate to="/" />} />
          <Route path="/admin/educationDetail" element={redux?.userReducer?.user?.user?.token != null ? <EducationDetails /> : <Navigate to="/" />} />
          <Route path="/admin/employeeDetail" element={redux?.userReducer?.user?.user?.token != null ? <EmployeeDetails /> : <Navigate to="/" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>

      </div>
    </BrowserRouter>




  )




}




export default App;
