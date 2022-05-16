import React from "react";
import Form from "react-bootstrap/Form";
import "./Profile.css";
import { Typography } from "@mui/material";


export default function Profile() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  const email = localStorage.getItem("email");
  const date = localStorage.getItem("date_joined");


  return (

    <div className="Login p-4" style={{backgroundColor:"white", borderRadius:"50px" , marginTop:"1%", color:"#0D223F"}}>

      <Form  >
        <Typography><h1 style={{ textAlign: "center" }}>Profile</h1></Typography>
        <br />
        <img src="/images/Ellipse 1.png" alt="Ellipse 1" style={{height:"150px", marginLeft:"80px"}} />
        <br/>
        <Typography><h2 style={{marginLeft:"100px"}}>{username}</h2></Typography>
        <br/>
        <div className="user">
        </div>
        <Form.Group size="lg" controlId="email">
          <div className="name">
            <Form.Control
              autoFocus
              type="text"
              value={username}
              style={{
                backgroundColor: "#CFCFCF",
                borderRadius: "1px",
                borderColor: "#707071",

              }}
            />
          </div>
          <br />
          <div className="email">
            <Form.Control
              autoFocus
              type="text"
              value={email}
              placeholder="Email"
              style={{
                backgroundColor: "#CFCFCF",
                borderRadius: "1px",
                borderColor: "#707071"
              }}
            />
          </div>
          <br />
          <div className="date">
            <Form.Control
              autoFocus
              type="text"
              value={date}
              style={{
                backgroundColor: "#CFCFCF",
                borderRadius: "1px",
                borderColor: "#707071"
              }}
            />
          </div>
          <br />
        </Form.Group>
        <div className="password">
          <Form.Group size="lg" controlId="password">
            <Form.Control
              type="password"
              placeholder="New Password Here"

              style={{
                backgroundColor: "#CFCFCF",
                borderRadius: "1px",
                borderColor: "#707071"

              }}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}