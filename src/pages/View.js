import React,{useState,useEffect} from 'react';
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import "./View.css";
import baseUrl, { API } from "../api"



const View = () => {
    const [user,setUser]=useState({});

    const {id}=useParams()

    const viewData=async()=>{
        await axios.get(`${API.getAUserData}/${id} `)
        .then((res)=>setUser({...res.data[0]}));
            
         
      // console.log("id",`${API.getAUserData}/${id} `)
      console.log("heelo")
      }

    useEffect(()=>{
     viewData()
    },[id])
  return (
    <div style={{marginTop:'150px'}}>
        <div className="card">
            <div className="card-header">
                <p>User Contact Details</p>
            </div>
            <div className="container">
                <strong>ID:</strong>
                <span>{id}</span>
                <br/>
                <br/>
                <strong>Name:</strong>
                <span>{user.name}</span>
                <br/>
                <br/>
                <strong>Email:</strong>
                <span>{user.email}</span>
                <br/>
                <br/>

                <strong>ConatctNo:</strong>
                <span>{user.contact}</span>
                <br/>
                <br/>


            </div>

        </div>

    </div>
  )
}

export default View