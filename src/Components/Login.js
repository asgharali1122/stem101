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
    console.warn(item)
    const res = await authApi.login(item)
    console.warn(res.data)

    if (res.data.username) {
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("password", res.data.password);
      localStorage.setItem("date_joined", res.data.date_joined);
      if (res.data.email) {
        localStorage.setItem("email", res.data.email);

      }
      authenticate();
      console.warn("apihit")
      nav('/profile')
    }
  }

  return (
    <div className="loginBody">
      <div className="Login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">  <Form onSubmit={handleSubmit}>
                <Typography><h1 >Log in</h1></Typography>
                <br />
                <br />
                <Form.Group size="lg" controlId="email">
                  <Form.Control
                    autoFocus
                    type="text"
                    id="text"
                    placeholder="User Name"
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button block size="lg"  disabled={!validateForm()} onClick={login}>
                  Log in
                </Button>
                <p>don't have an account, <a href="/signup" style={{ color: "#FF6400" }}>Sign up</a></p>
            
              </Form>
              </div>
            <div className="col-6" >
              <div className="logoimg" style={{ 'overflow':'hidden'}}>
              <img src="/images/Group 158.png" alt="group"/>
              </div>
            
            </div>
            
          </div>
         
        </div>
       
      </div>
    </div>
  );
}