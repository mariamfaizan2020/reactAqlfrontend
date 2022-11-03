import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import "./home.css"
import { toast } from "react-toastify"
import axios from "axios"
import baseUrl, { API } from "../api"
import { IconButton, Grid, InputBase, Button, Typography } from "@material-ui/core";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components/macro";
import {
    // TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@material-ui/core"
import { Navigation } from "@mui/icons-material";


const TableData = styled(TableCell)`
  textAlign: "center"`;


const Home = () => {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const [end,setEnd]=useState(5)

    // const loadData=async ()=>{
    //   const response=await axios.get(`${API.getUser}`)
    //   console.log("response",response)
    //   setData(response.data)

    // };
    const limit = 5
    const next = () => {
        setStart(start + 5)
        // setEnd(end+5)
    }
    const back = () => {
        if (start > 0) {
            setStart(start - 5)
            // setEnd(end-6)
        }

    }
    console.log("starrt", start, limit)

    const loadData = async () => {
        let body = {
            start: start,
            limit: limit
        }
        console.log("body", body, API.getUser)

        await axios.post(`${API.getUser}`, body)
            .then((response) => {

                console.log("response", response)
                setData(response.data)
            }).catch((e) => {
                console.log("e", e)
            })




    };


    useEffect(() => {
        loadData();
    }, [start, limit])


    const deleteContact = (id) => {
        console.log("id", id)
        if (window.confirm("Are you sure you want to delete teh contact?")) {
            axios.delete(`${API.deleteUser}/${id}`)
            toast.success("contatc deleted successfully")
            setTimeout(() => loadData(), 3000)
        }
    }
    const logoutUser = () => {
        dispatch({
            type: "LOGOUT",
            payload: {
                user: [],
                isLoggedIn: false,
            },
        });
        navigate("/")
    }
    return (
        <Grid container style={{ marginTop: "100px",backgroundColor: "#E2EDEE"  }}>
            <Grid item container xs={12} sm={12} md={12} lg={12} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <Grid item xs={12} sm={12} md={3} lg={3} style={{ display: "flex", border: "2px  rgb(84 133 192) solid", marginBottom: "5px" }}>
                    <SearchIcon style={{ marginLeft: "10px", color: "rgb(84 133 192)" , alignSelf: "center" }} />
                    <InputBase

                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}

                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} style={{ display: "flex", justifyContent: "flex-end", marginBottom: "5px" }}>
                    <Button variant="contained"
                style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%" }}
                        onClick={() => navigate("/admin/contact")}>Add Details
                    </Button>
                    <Button
                       style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "20%",marginLeft:"10px" }}
                        onClick={() => logoutUser()}>

                        LOGOUT
                    </Button>
                </Grid>



            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
                {data.length !== 0 &&
                    <Table stickyHeader aria-label='simple-table'
                    //    className="styled-table"
                    >
                        <TableHead >
                            <TableRow>
                                <TableCell>No.</TableCell>
                                <TableCell >Id</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell >Contact</TableCell>
                                <TableCell align="center" >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (

                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td,&:last-child th': { border: 10 } }}
                                >
                                    <TableData>{index + 1}</TableData>
                                    <TableData>{item.id}</TableData>
                                    <TableData>{item.name}</TableData>
                                    <TableData>{item.email}</TableData>
                                    <TableData >{item.contact}</TableData>
                                    <TableData align="center">
                                        <Link to={`/update/${item.id}`}>
                                            <button
                                                className="btn btn-edit"
                                            >Edit</button>
                                        </Link>

                                        <button
                                            className="btn btn-delete"
                                            onClick={() => deleteContact(item.id)}>Delete</button>

                                        <Link to={`/View/${item.id}`}>
                                            <button
                                                className="btn btn-view"
                                            >view</button>
                                        </Link>
                                    </TableData>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                            }
                
               {data.length<5 || data.length==0 ?
               <Grid item xs={12} sm={12} md={12} lg={12} style={{margin:"20px"}}>
               <Typography style={{fontSize:"14px",color:"rgb(84 133 192)"}}>
                    NO MORE DATA TO DISPLAY
               </Typography>
            </Grid>
            :null
               }     
                    

                    
                

                <Grid item container xs={12} sm={12} md={12} lg={12} style={{display:"flex",justifyContent:"flex-end",}}>
                    {start === 0 ?
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{display:"flex",justifyContent:"flex-end",margin:"10px"}}>
                            <Button
                             style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "10%" }}
                                onClick={() => next()}>
                                NEXT
                            </Button>
                        </Grid>

                        : data.length === 0 ?
                            <Grid item xs={12} sm={12} md={12} lg={12} style={{display:"flex",margin:"10px"}}>

                                <Button
                                style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "10%" }}
                                    onClick={() => back()}>
                                    BACK
                                </Button>
                            </Grid>
                            :
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
                                    <Button
                              style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "10%" }}
                                        onClick={() => back()}>
                                        BACK
                                    </Button>
                                    {
                                        data.length < 5 || data.length === 0 ? null :  <Button
                                        style={{ backgroundColor: "rgb(84 133 192)", color: "white", marginTop: "20px", width: "10%" }}
                                        onClick={() => next()} >
                                        NEXT
                                    </Button>
                                    }
                                   
                            </Grid>}
          </Grid>




                    {/* // <button

                    //     onClick={() => next()}>Next</button> : data.length === 0 ? <button onClick={() => back()}>back</button> :
                    //     <div>

                    //         <button

                    //             onClick={() => back()}>
                    //             back</button>
                    //         <button

                    //             onClick={() => next()}>
                    //                 next</button>
                    //     </div>
                } */}
            </Grid >


        </Grid >
    )
}
export default Home;


// <table className="styled-table">
                    //     <thead>
                    //         <tr>
                    //             <th style={{ textAlign: "center" }}>No.</th>
                    //             <th style={{ textAlign: "center" }}>Id</th>
                    //             <th style={{ textAlign: "center" }}>Name</th>
                    //             <th style={{ textAlign: "center" }}>Email</th>
                    //             <th style={{ textAlign: "center" }}>Contact</th>
                    //             <th style={{ textAlign: "center" }}>Action</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody>

                    //         {

                    //             data.map((item, index) => {
                    //                 return (
                    //                     <tr key={item.id}>
                    //                         <th scope="row">{index + 1}</th>
                    //                         <td>{item.id}</td>
                    //                         <td>{item.name}</td>
                    //                         <td>{item.email}</td>
                    //                         <td>{item.contact}</td>
                    //                         <td>
                    //                             <Link to={`/update/${item.id}`}>
                    //                                 <button className="btn btn-edit">Edit</button>
                    //                             </Link>

                    //                             <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>Delete</button>

                    //                             <Link to={`/View/${item.id}`}>
                    //                                 <button className="btn btn-view">view</button>
                    //                             </Link>
                    //                         </td>

                    //                     </tr>
                    //                 )

                    //             })}

                    //     </tbody>
                    // </table>