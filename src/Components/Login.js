import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Typography } from "@mui/material";
import authApi from "../Services/authApi"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from "./Spinner";


export default function Login({ authenticate }) {
  const nav = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const login = async () => {
    setLoading(true)
    let item = { email, password }
    const res = await authApi.login(item)
    
    console.warn(res.data)
    if((res.status)){
      if (res.data.user_info.username) {
        localStorage.setItem("username", res.data.user_info.username);
        localStorage.setItem("date_joined", res.data.date);
        // localStorage.setItem("user", true);
        
        if (res.data.user_info.email) {
          localStorage.setItem("email", res.data.user_info.email);

        }
        authenticate();
        // setLoading(false)
        nav('/dashboard')
      }
    }
    else{
      setLoading(false)
      toast.error ("Something Went Wrong")
      
    }
  }

  return (
    
    <div className="container-fluid loginBody ">
      <ToastContainer />
    <div className="row">
      <div style={{marginTop:"auto"}}>
      {loading ? <Spinner /> : <></>}
      </div>
      <div className="col-2"></div>
      <div className="col-4" style={{marginTop:"11%"}}>  
      <Form onSubmit={handleSubmit}>
          <Typography><h1 style={{
    color:"whitesmoke",
    marginLeft:"12%",
    marginTop:"2%",
    fontFamily:"Franklin Gothic, Demi"
  }} >Log in</h1></Typography>
          <br />
          <br />
          <Form.Group size="lg" controlId="email">
            <Form.Control
              type="text"
              id="text"
              placeholder="User Name"
              style={{
               backgroundColor: "rgb(198 193 193)",
               border:"1px rbg(100 93 93)",
               borderRadius:"4px",
               width:"50%",
               textDecorationColor:"white"
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br />
          <Form.Group size="lg" controlId="password">
            <Form.Control
              type="password"
              value={password}
              id="text"
              placeholder="Password"
              style={{
                backgroundColor: "rgb(198 193 193)",
               border:"1px rbg(100 93 93)",
               borderRadius:"4px",
               width:"50%",
               textDecorationColor:"white"
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          
          <br />
            <img style={{height:"40px", marginLeft:"22px", cursor:"pointer" }} block size="lg" disabled={!validateForm()} onClick={login} src="/images/Group 170.png" alt="Group" />
        </Form>
        <br/>
        <p style={{color:"white", fontFamily:"Franklin Gothic Book, Regular", marginLeft:"10px", position:"fixed"}}>don't have an account, <a href="/signup"><img style={{height:"20px", marginBottom:"5px"}} src="/images/signup.png" alt="signup" /> </a></p>
        </div>
      <div className="col-6" >
        <div className="logoimg" style={{ overflow:'hidden'}}>
        <img src="/images/Logo.png" alt="group" style={{height:'50%', width:'88%', marginTop:'40%'}}/>
        </div>
      </div>
    </div>
  </div>
  );
}