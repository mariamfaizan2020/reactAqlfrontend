import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import { toast } from "react-toastify"
import baseUrl, { API } from "../api"
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { ArrowForward } from '@mui/icons-material';

const initialState = {
    Username: "",
    Email: "",
    Phone: "",
    DateofBirth: "",
    Zipcode: "",
    Address: "",
    State: ""
};

const AddEdit = () => {
    const navigate = useNavigate()
    const [state, setState] = useState(initialState)
    const { Username, Email, Phone, DateOfBirth, Zipcode, Address, State } = state;
    const { id } = useParams();
   
    console.log("id", id)


    const getUserData = async () => {
        await axios.get(`${API.getAUserData}/${id} `)
            //   .then((res)=>console.log("res",res))
            .then((resp) => {
                console.log(resp)
                if (resp.data.length === 0) {
                    setState(initialState)
                } else {
                    setState({ ...resp.data[0] })
                }


            })
        // console.log("id",`${API.getAUserData}/${id} `)
        console.log("heelo")
    }

    useEffect(() => {
        getUserData()
    }, [id])

    
    const NextScreen = async(e) => {
        console.log("username", Username)
        const regEmail=/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (!Username) {
            toast.error("please provide UserName")
        } else if (!Email) {
            toast.error("please provide Valid Email")
        }else if(!regEmail.test(Email)){
            toast.error("please enter valid email")
        } else if (!Phone) {
            toast.error("please provide Phone")
        } else if (!DateOfBirth) {
            toast.error("please provide dateOFBirth")
        } else if (!Zipcode) {
            toast.error("please provide Zipcode")
        } else if (!Address) {
            toast.error("please provide Address")
        }else if (!State) {
            toast.error("please provide State")
        }

        else {
          if(!id){
              try{
                  const insertContactDetails= await axios.post(`${API.insertUser}`,{
                      id,
                  })
                  console.log("insertContactDetails",insertContactDetails)
                  navigate("/admin/educationDetail")
              }
              catch (error) {
                            toast.error(error.response)
                       }
          }
       
        }
    }

    
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     if (!name || !email || !contact) {
    //         toast.error("please provide value into each input fields")
    //     } else {
    //         if (!id) {
    //             try {
    //                 const insertContactDetails = await axios.post(`${API.insertUser}`, {
    //                     name,
    //                     email,
    //                     contact
    //                 })
    //                 console.log("insertContactDetails", insertContactDetails)
    //                 setState({ name: "", email: "", contact: "" })
    //                 toast.success("contact Added")
    //                 setTimeout(() => navigate("/Home", { from: AddEdit }), 3000)
    //             } catch (error) {
    //                 console.log("error", error.response)
    //                 toast.error(error.response.data.msg)
    //             }
    //         } else {
    //             try {
    //                 await axios.put(`${API.updateUser}/${id}`, {
    //                     name,
    //                     email,
    //                     contact
    //                 })
    //                 setState({ name: "", email: "", contatc: "" })
    //                 toast.success("contact UPdated")
    //                 setTimeout(() => navigate("/Home", { from: AddEdit }), 3000)
    //             } catch (error) {
    //                 toast.error(error.response.data.msg)
    //             }
    //         }
    //     }
    // }


    const handleInputChange = (e) => {
        console.log("e",e.target.value)
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }


    return (
        <Grid container style={{ backgroundColor: "#E2EDEE" }}>
            <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center", marginTop: "140px" }}>
                <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white" }}>
                        contactDetails
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
                    <Button disabled style={{ backgroundColor: "#667F81", color: "white" }}>
                        EmployementDetails
                    </Button>
                </Grid>

            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginTop: "40px" }}>
                <Typography>
                    CONTACT DETAILS
                </Typography>
            </Grid>
            <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="Name"
                        name="Username"
                        label="Username" fullWidth required
                        // value=""
                        onChange={handleInputChange}>

                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="Email"
                        name="Email"
                        label="Email" fullWidth required
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="Phone#"
                        name="Phone"
                        label="Phone" fullWidth required
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="DateOfBirth"
                        label="DateOfBirth" fullWidth required
                        name="DateOfBirth"
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>

                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="Zipcode"
                        label="Zipcode" fullWidth required
                        name="Zipcode"
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>

                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="Address"
                        label="Address" fullWidth required
                        name="Address"
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7}
                    style={{ border: "1px solid black", marginBottom: "5px", paddingLeft: "15px" }}>
                    <TextField
                        InputProps={{ disableUnderline: true }}
                        placeholder="State"
                        label="State" fullWidth required
                        name="State"
                        // value=""
                        onChange={handleInputChange}>
                    </TextField>

                </Grid>
            </Grid>
            <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%" }}
                        onClick={() => NextScreen()}
                    >
                        NEXT
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} >
                    <Button style={{ backgroundColor: "rgb(84 133 192)", color: "white", margin: "20px", width: "20%" }}
                        onClick={() => navigate("/Home")}>
                        GO BACK
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>

                </Grid>
            </Grid>








        </Grid>
        // <div style={{ marginTop: "100px" }}>
        //     <form style={{
        //         margin: "auto",
        //         padding: "15px",
        //         maxWidth: "400px",
        //         alignContent: "center"

        //     }}
        //         onSubmit={handleSubmit}
        //     >
        //         <label htmlFor="name">Name</label>
        //         <input
        //             type="text"
        //             id="name"
        //             name="name"
        //             placeholder="Enter your Name"
        //             value={name || ""}
        //             onChange={handleInputChange}
        //         />
        //         <label htmlFor="email">Email</label>
        //         <input
        //             type="email"
        //             id="email"
        //             name="email"
        //             placeholder="Enter your Email"
        //             value={email || ""}
        //             onChange={handleInputChange}
        //         />
        //         <label htmlFor="contact">Contact</label>
        //         <input
        //             type="text"
        //             id="contact"
        //             name="contact"
        //             placeholder="Enter your Contact No."
        //             value={contact || ""}
        //             onChange={handleInputChange}
        //         />
        //         <input type="submit" value={id ? "Update" : "Save"} />
        //         <Link to="/Home">
        //             <input type="button" value="GO Back" />
        //         </Link>
        //     </form>

        // </div>
    )
}

export default AddEdit