import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import "./home.css"
import {toast} from "react-toastify"
import axios from "axios"
import baseUrl, { API } from "../api"


const Home= ()=>{
    const [data,setData]=useState([]);

    const loadData=async ()=>{
      const response=await axios.get(`${API.getUser}`)
      console.log("response",response)
      setData(response.data)

    };

    useEffect(()=>{
        loadData();
    },[])

    const deleteContact=(id)=>{
        console.log("id",id)
        if(window.confirm("Are you sure you want to delete teh contact?")){
            axios.delete(`${API.deleteUser}/${id}`)
            toast.success("contatc deleted successfully")
            setTimeout(()=>loadData(),3000)
        }
    }
   return(
       
       <div style={{margin:"150px"}}>
         <Link to="/addcontact">
            <button className="btn btn-contact">Add contact</button>
         </Link>
      <table className="styled-table">
          <thead>
              <tr>
                  <th style={{textAlign:"center"}}>No.</th>
                  <th style={{textAlign:"center"}}>Name</th>
                  <th style={{textAlign:"center"}}>Email</th>
                  <th style={{textAlign:"center"}}>Contact</th>
                  <th style={{textAlign:"center"}}>Action</th> 
              </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>{
                return(
                    <tr key={item.id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact}</td>
                        <td>
                            <Link to={`/update/${item.id}`}>
                            <button className="btn btn-edit">Edit</button>
                            </Link>
                          
                            <button className="btn btn-delete" onClick={()=>deleteContact(item.id)}>Delete</button>
                         
                            <Link to={`/View/${item.id}`}>
                            <button className="btn btn-view">view</button>
                            </Link>
                        </td>

                    </tr>
                )

            })}
        </tbody>
      </table>
       </div>
   )
}  
export default Home;