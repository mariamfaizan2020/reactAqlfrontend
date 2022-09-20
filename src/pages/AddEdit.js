import React,{useState,useEffect} from 'react';
import {useNavigate,useParams,Link} from "react-router-dom";
import "./addEdit.css";
import axios from "axios";
import {toast} from "react-toastify"
import baseUrl, { API } from "../api"

const initialState={
    name:"",
    email:"",
    contact:""
};

const AddEdit = () => {
    const navigate = useNavigate()

    const [state,setState]=useState(initialState)

    const {name,email,contact}=state;

    const {id}=useParams();
    console.log("id",id)

    const getUserData=async()=>{
      await axios.get(`${API.getAUserData}/${id} `)
    //   .then((res)=>console.log("res",res))
        .then((resp)=>{console.log(resp)
            if(resp.data.length===0){
                setState(initialState)
            }else{
                setState({...resp.data[0]})
            }
          
          
        })
    // console.log("id",`${API.getAUserData}/${id} `)
    console.log("heelo")
    }

    useEffect(()=>{
       getUserData()
    },[id])

    const handleSubmit=(e)=>{
        e.preventDefault()
       if(!name||!email||!contact){
           toast.error("please provide value into each input fields")
       }else{
           if(!id){
            axios.post(`${API.insertUser}`,{
                name,
                email,
                contact
            }).then(()=>{
                setState({name:"",email:"",contatc:""})
            }).catch((err)=>toast.error(err.response.data));  
            toast.success("contact Added")
            setTimeout(()=>navigate("/",{from:AddEdit}),3000)
          }else{
            axios.put(`${API.updateUser}/${id}`,{
                name,
                email,
                contact
            }).then(()=>{
                setState({name:"",email:"",contatc:""})
            }).catch((err)=>toast.error(err.response.data));  
            toast.success("contact UPdated")
            setTimeout(()=>navigate("/",{from:AddEdit}),3000)
        }
       }
           }
        

    const handleInputChange =(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    }
  return (
    <div style={{marginTop:"100px"}}>
        <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"

        }}
        onSubmit={handleSubmit}
        >
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
            value={name || ""}
            onChange={handleInputChange}
            />
             <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email || ""}
            onChange={handleInputChange}
            />
             <label htmlFor="contact">Contact</label>
            <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter your Contact No."
            value={contact || ""}
            onChange={handleInputChange}
            />
            <input type="submit" value={id? "Update" :"Save"}/>
            <Link to="/">
            <input type="button" value="GO Back"/>
            </Link>
        </form>

    </div>
  )
}

export default AddEdit