import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl, { API } from "../api";
import {
   Grid,
   TextField,
   Button,

} from "@material-ui/core";
import styled from "styled-components/macro";
import { PhotoCamera, Send } from "@mui/icons-material";

const InputField = styled(TextField)``;

 const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  
  


  const loginUser=async()=>{
    const regPass=/^[0-9A-Za-z]{7,33}$/
    const regEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
   if(!email){
     return toast.error("email is required")
   }else if(!regEmail.test(email)){
    return toast.error("please enter valid email")
   }else if(!password){
     return toast.error("password is required")
   }else if(!regPass.test(password)){
    return toast.error("password should be greater than 7 characters")
  }

  try{
   let body = {
     email:email,
     password:password
   }
   console.log("body",body)
   const loginResponse = await axios.post(`${API.loginUser}`, body)
          console.log("loginResponse",loginResponse)
          // toast.success("contact Registered")
          setTimeout(()=>navigate("/Home",{from:Login}),3000)
      
  } catch(error){
   console.log(error.response)
   toast.error(error.response.data.msg)

  }


  };
  return (
    <Grid container variant="container">
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "30px" }} >
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ border: "1px solid gray" }}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 10, margin: "20px auto" }}>
                <h2 style={{ margin: 0 }}>SIGN IN</h2>
            </Grid>
            <Grid item container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
               
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%" }}>
                    <InputField
                        fullWidth
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%" }}>
                    <InputField
                        fullWidth
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>

               
                <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%", marginBottom: "20px" ,marginTop:"20px"}}>
                    <Button variant="contained" color="primary"
                        onClick={() => loginUser()}
                    >
                      LOGIN
                    </Button>
                </Grid>


            </Grid>

        </Grid>
    </Grid>

</Grid>
);
};

export default Login