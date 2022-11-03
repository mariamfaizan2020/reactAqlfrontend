import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify"
import baseUrl, { API } from "../api"
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { ArrowForward, Directions } from '@mui/icons-material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';

const initialState={
  eduType:"Matriculation",
  eduYearStart:"2022",
  eduYearEnd:"2022"
}


const EducationDetails = () => {
  // const [yearOFEdu,setYearOfedu]=useState("")
  const [state,setState]=useState(initialState)
  const {eduType,eduYearStart,eduYearEnd}=state
  const navigate = useNavigate()
  // const [edutype, SetEdutype] = useState()

  const NextScreen = () => {
  
    if (!eduType) {
        toast.error("please select your education from dropdowm")
    } else if (!eduYearStart) {
        toast.error("please provide Start Year of education")
    } else if (!eduYearEnd) {
      toast.error("please provide End Year of education")
  } 
    else {
      navigate("/admin/employeeDetail")
      console.log("year",eduYearStart)
console.log("educatiiontype",eduType)
    }
}

const handleInputChange=(e)=>{
  console.log("eee",e.target.value)
  const {name,value}=e.target
  setState({...state,[name]:value})
}
console.log("year",eduYearStart)
console.log("educatiiontype",eduType)

  return (

    <Grid container style={{ backgroundColor: "#E2EDEE" }}>
      <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center", marginTop: "140px" }}>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Button disabled style={{ backgroundColor: "#667F81", color: "white" }}>
            ContactDetails
          </Button>
        </Grid>
        <ArrowForward />
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Button style={{ color: "white", backgroundColor: "rgb(84 133 192)" }}>
            EducationDetails
          </Button>
        </Grid>
        <ArrowForward />
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Button disabled style={{ backgroundColor: "#667F81", color: "white" }}>
            EmployementDetails
          </Button>
        </Grid>

      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: "40px" }}>
        <Typography>
          EDUCATION DETAILS
        </Typography>
      </Grid>
      <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} sm={12} md={7} lg={7}
          style={{ border: "1px solid black",paddingTop:"30px",paddingBottom:"30px", marginBottom: "5px", paddingLeft: "15px" }}>
          <InputLabel style={{display:"flex",justifyContent:"flex-start"}} variant="standard" htmlFor="uncontrolled-native">
            TYPE_OF_EDUCATION
          </InputLabel>
          <NativeSelect
          fullWidth
            defaultValue={"Matriculation"}
            onChange={handleInputChange}
            inputProps={{
            
              name: 'eduType',
              id: 'uncontrolled-native',
              // disableUnderline: true
            }}
          >
            <option value={"Matriculation"}>Matriculation</option>
            <option value={"Intermidiate"}>Intermidiate</option>
            <option value={"Graduation"}>Graduation</option>
          </NativeSelect>
        </Grid>
        <Grid item container xs={12} sm={12} md={7} lg={7}
          style={{ border: "1px solid black", marginBottom: "5px",paddingTop:"20px",display:"flex",justifyContent:"center"}}>
            
            <Grid item xs={12} sm={12} md={12} lg={12} style={{}}>
            <InputLabel 
            //  style={{display:"flex",justifyContent:"center"}}
              variant="standard" htmlFor="uncontrolled-native">
             YEAR
          </InputLabel>
              </Grid> 
          <Grid item xs={12} sm={12} md={4} lg={4} 
          style={{paddingBottom:"30px"}} 
          >
          <InputLabel 
   
          variant="standard" htmlFor="uncontrolled-native">
            FROM
          </InputLabel>
          <NativeSelect
          fullWidth
            defaultValue={"2022"}
            onChange={handleInputChange}
            inputProps={{
            
              name: 'eduYearStart',
              id: 'uncontrolled-native',
              // disableUnderline: true
            }}
          >
            <option value={"2024"}>2024</option>
            <option value={"2023"}>2023</option>
            <option value={"2022"}>2022</option>
            <option value={"2021"}>2021</option>
            <option value={"2020"}>2020</option>
            <option value={"2019"}>2019</option>
            <option value={"2018"}>2018</option>
          </NativeSelect>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} 
             style={{paddingBottom:"30px"}} >
          <InputLabel
   
          variant="standard" htmlFor="uncontrolled-native">
           TO
          </InputLabel>
          <NativeSelect
          fullWidth
            defaultValue={"2022"}
            onChange={handleInputChange}
            inputProps={{
            
              name: 'eduYearEnd',
              id: 'uncontrolled-native',
              // disableUnderline: true
            }}
          >
            <option value={"2024"}>2024</option>
            <option value={"2023"}>2023</option>
            <option value={"2022"}>2022</option>
            <option value={"2021"}>2021</option>
            <option value={"2020"}>2020</option>
            <option value={"2019"}>2019</option>
            <option value={"2018"}>2018</option>
          </NativeSelect>
          </Grid>
          
        </Grid>

      </Grid>
      <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%" }}
            onClick={() =>NextScreen() }>
            NEXT
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} >
          <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", margin: "20px", width: "20%" }}
                      onClick={()=>navigate("/admin/contact")}>
            GO BACK
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>

        </Grid>
      </Grid>
    </Grid>

  )
}
export default EducationDetails;

{/* <TextField
            InputProps={{ disableUnderline: true ,name:'eduYear'}}
            placeholder="YYYY"
      
            // value=""
            onChange={handleInputChange}
           fullWidth required>
          </TextField> */}