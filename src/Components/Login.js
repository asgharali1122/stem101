import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Typography } from "@mui/material";
import authApi from "../Services/authApi"
import { useNavigate } from "react-router-dom";


export default function Login({ authenticate }) {
  const nav = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const login = async () => {
    let item = { email, password }
    const res = await authApi.login(item)
    console.warn(res.data)
    if((res.status)){
      if (res.data.username) {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("date_joined", res.data.date_joined);
        if (res.data.email) {
          localStorage.setItem("email", res.data.email);

        }
        authenticate();
        nav('/dashboard')
      }
    }
    else{
      console.warn("in else")
      alert("Error something went wrong");
    }
  }

  return (
    
    <div className="container-fluid loginBody ">
    <div className="row">
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
            <img style={{height:"40px", marginLeft:"22px"}} block size="lg" disabled={!validateForm()} onClick={login} src="/images/Group 170.png" alt="Group" />
        </Form>
        <br/>
        <p style={{color:"white", fontFamily:"Franklin Gothic Book, Regular", marginLeft:"10px", position:"fixed"}}>don't have an account, <a href="/signup"><img style={{height:"20px", marginBottom:"5px"}} src="/images/signup.png" alt="signup" /> </a></p>
        </div>
      <div className="col-6" >
        <div className="logoimg" style={{ overflow:'hidden'}}>
        <img src="/images/Group 158.png" alt="group" style={{height:'50%', width:'88%', marginTop:'18%'}}/>
        </div>
      </div>
    </div>
  </div>
  );
}