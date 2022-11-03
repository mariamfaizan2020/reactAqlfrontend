import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify"
import baseUrl, { API } from "../api"
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { ArrowForward } from '@mui/icons-material';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';

const initialState={
  jobType:"Cashier",
  jobDiscription:"",
  startYear:"2022",
  endYear:"2022"
}

 const EmployeeDetails = () => {
 const navigate = useNavigate()
 const [state, setState] = useState(initialState)
 const {jobType,jobDiscription,startYear,endYear}=state;

const save=()=>{
  if (!jobType){
    console.log("no no no")
    toast.error("Select the Type Of job from dropDown")
  }else if (!jobDiscription){
    toast.error("please enter your job Description")
  }else if(!startYear){
    toast.error("select the start year of job from dropdown")
  }else if(!endYear){
    toast.error("select the end year of job from dropdown")
  }else{
    toast.success("All details has been added!")
    navigate("/Home")
  }
}
 const handleInputChange=(e)=>{
   console.log("ee",e.target.value)
   const {name,value}=e.target
   setState({...state,[name]:value})
 }
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
      <Button disabled style={{ backgroundColor: "#667F81", color: "white" }}>
    
          EducationDetails
        </Button>
      </Grid>
      <ArrowForward />
      <Grid item xs={12} sm={12} md={2} lg={2}>
      <Button style={{ color: "white", backgroundColor: "rgb(84 133 192)" }}>
          EmployementDetails
        </Button>
      </Grid>

    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: "40px" }}>
      <Typography>
   EMPLOYMENT DETAILS
      </Typography>
    </Grid>
    <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center" }}>
      <Grid item xs={12} sm={12} md={7} lg={7}
        style={{ border: "1px solid black",paddingTop:"30px",paddingBottom:"30px", marginBottom: "5px", paddingLeft: "15px" }}>
        <InputLabel style={{display:"flex",justifyContent:"flex-start"}} variant="standard" htmlFor="uncontrolled-native">
      JOB_TYPE
        </InputLabel>
        <NativeSelect
        fullWidth
          defaultValue={"Cashier"}
          onChange={handleInputChange}
          inputProps={{
            name: 'jobType',
            id: 'uncontrolled-native',
            // disableUnderline: true
          }}
        >
          <option value={"Accountant"}>Accountant</option>
          <option value={"Cashier"}>Cashier</option>
          <option value={"Manager"}>Manager</option>
        </NativeSelect>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7}
        style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" ,paddingTop:"20px"}}>
            <InputLabel style={{display:"flex",justifyContent:"flex-start"}} variant="standard" htmlFor="uncontrolled-native">
                JOB DISCRIPTION
            </InputLabel>
            <TextField
            InputProps={{ disableUnderline: true ,name: 'jobDiscription',}}
            placeholder="DISCRIPTION"
            onChange={handleInputChange}
     
            fullWidth required>
            </TextField>

      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={7}
        style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" ,paddingTop:"20px"}}>
           <InputLabel style={{display:"flex",justifyContent:"flex-start"}} variant="standard" htmlFor="uncontrolled-native">
           YEAR OF START
        </InputLabel>
        <NativeSelect
        fullWidth
          defaultValue={"2022"}
          onChange={handleInputChange}
          inputProps={{
            name: 'startYear',
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

      <Grid item xs={12} sm={12} md={7} lg={7}
        style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" ,paddingTop:"20px"}}>
           <InputLabel style={{display:"flex",justifyContent:"flex-start"}} variant="standard" htmlFor="uncontrolled-native">
           YEAR OF END
        </InputLabel>
        <NativeSelect
        fullWidth
          defaultValue={"2022"}
          onChange={handleInputChange}
          inputProps={{
            name: 'endYear',
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
    <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%" }}
          onClick={() => save()}>
        SAVE
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} >
        <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", margin: "20px", width: "20%" }}
                    onClick={()=>navigate("/admin/educationDetail")}>
          GO BACK
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>

      </Grid>
    </Grid>
  </Grid>
  )
}

export default EmployeeDetails;