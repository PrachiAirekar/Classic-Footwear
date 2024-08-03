import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



export default function AdminLogin() {
  const navigate =useNavigate();

  const[user,setUser]=useState("");
  const[password,setPassword]=useState("");

  useEffect(() =>{
    const credential = localStorage.getItem("user");
     if(credential !=null)
      {
        navigate("/admin")
      }
  },[]);

  function handleLogin(e){
    e.preventDefault();
    
    if(user === "admin" && password === "admin"){

      localStorage.setItem("user", user);
      navigate("/admin")
    }else{
      Swal.fire("Invalid Credential !!");
      // Swal.fire("Invalid Credential !!!");
      setUser("")
      setPassword("")
    }
  }


  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"> Username </label>
    <input  value = {user} onChange={(e) => setUser(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Password </label>
    <input value = {password} onChange={(e) => setPassword(e.target.value)}type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button onClick={(e) => handleLogin(e)} className="btn btn-md" style={{backgroundColor:"rgb(136,200,188)"}}>Login</ button>
  </form>    
        </div>
      
      <div className='col-lg-4'></div>
    </div>
    </div>
    </div>
  )
}
