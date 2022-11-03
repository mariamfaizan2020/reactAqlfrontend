import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify";
import baseUrl, { API } from "../api";
import {
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    Paper,
    TextField,
    Typography,
    IconButton,
    Button,

} from "@material-ui/core";
import styled from "styled-components/macro";
import { PhotoCamera, Send } from "@mui/icons-material";

const InputField = styled(TextField)``;


function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [img, setImg] = useState([])
    const [imgURL, setImgURL] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        console.log("imgag", imgURL)
    }, [img, imgURL])
    const imageUpload = (e) => {
        setImg(e.target.files)
        console.log("asn", e.target.files)
        setImgURL(URL.createObjectURL(e.target.files[0]))
    }


    const submitdata = () => {
      const regPass=/^[0-9A-Za-z]{7,33}$/
      const regEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
      console.log("pass",regPass.test(password))
        if (!name) {
           return toast.error("name is required")
        } else if (!email) {
           return toast.error("email is required")
        }else if(!regEmail.test(email)){
            return toast.error("please enter valid email")
        } 
        else if (!password) {
           return toast.error("password is required")
        }else if(!regPass.test(password)){
          return toast.error("password should be greater than 7 characters")
        }
        else if (imgURL.length===0) {
           return toast.error("image is required")
        }

        try {
            let body = {
                name: name,
                email: email,
                password: password,
                image: imgURL
            } 
            console.log("body",body)
          const registerResponse =  axios.post(`${API.registerUser}`, body)
          console.log("registerResponse",registerResponse)

        } catch (error) {
            console.log("error",error)
        }
        toast.success("contact Registered")
        setTimeout(()=>navigate("/",{from:Register}),3000)
       
    
        


    }
    return (
        <Grid container variant="container" style={{marginTop:'6%'}}>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "30px" }} >
                <Grid item xs={12} sm={12} md={6} lg={6} style={{ border: "1px solid gray", backgroundColor: "#E2EDEE" }}>
                    <Grid item xs={12} sm={12} md={12} lg={12} style={{ padding: 10, margin: "20px auto" }}>
                        <h2 style={{ margin: 0 }}>SIGN UP</h2>
                        <Typography >
                            fill the form to get register!
                        </Typography>
                    </Grid>
                    <Grid item container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%" }}>
                            <InputField
                                fullWidth
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
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

                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%", margin: "20px" }}>
                            <Button style={{ backgroundColor: "lightcoral", color: "white" }}
                                value={img}

                                aria-label="upload picture"
                                component="label"
                            > Upload
                                <input onChange={(e) => imageUpload(e)} hidden accept="image/*" type="file" />
                                <PhotoCamera />
                            </Button>
                            <Grid item xs={12} sm={12} md={12} lg={12} >
                                <img src={img.length > 0 ? imgURL : "https://media.istockphoto.com/vectors/default-avatar-photo-placeholder-profile-icon-vector-id1313110704?k=20&m=1313110704&s=612x612&w=0&h=rcF1_ukINlcPVY1JYkyYkTkbvET4E3jEslCgxeda11Y="}
                                    width="100px" height="100px" style={{ marginTop: "20px" }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ width: "35%", marginBottom: "20px" }}>
                            <Button variant="contained" style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%" }}
                                onClick={() => submitdata()}
                            >
                                Submit
                            </Button>
                        </Grid>


                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    );
};

export default Register;
