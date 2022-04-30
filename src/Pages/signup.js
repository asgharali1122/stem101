import React, { useState } from "react";
import "./style.css";
import authApi from "../Services/authApi"
import axios from "axios";
import { Typography } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const baseUrl = "https://boardswitch.herokuapp.com/";


export default function Signup() {
  const [user_name, setUser_name] = useState("");
  const [email, setUser_Email] = useState("");
  const [password, setUser_Password] = useState("");
  const [role, setUser_Role] = useState("student");
  const [postal, setUser_Postal] = useState("");
  const [district, setUser_District] = useState("");
  const nav = useNavigate();
  let navigate = useNavigate();
  const register = async () => {
    let item = { user_name, email, password, role, postal, district };
    const res = await authApi.register(item)

  if (res.status == 200){
    toast.success("Account Created Successfully")
    alert("Account Created Successfully")
    navigate("/login")
  }
  else if (res.response.status == 400){
    toast.error("user already exists")
    alert("user already exists")
  }
  };
  return (
    <>
      <div className="signupbody">
        <div className="top">
          <div className="container-fluid">
            <div className="row">
            {/* <ToastContainer /> */}
              <div className="col-6" style={{ marginTop: "7%" }}>
                <Typography>
                  <h1
                    style={{
                      color: "whitesmoke",
                      marginLeft: "215px",
                      fontFamily: "Franklin Gothic, Demi",
                    }}
                  >
                    Sign up
                  </h1>
                </Typography>
                <br />
                <br />
                <div className="form" style={{marginLeft:"200px"}}>
                  <div className="input_field">
                  <Form.Group size="lg" controlId="email">
                  <Form.Control
                    type="text"
                    id="text"
                    placeholder="Frist Name"
                    style={{
                     backgroundColor: "rgb(198 193 193)",
                     border:"1px rbg(100 93 93)",
                     borderRadius:"4px",
                     textDecorationColor:"white",
                     width:"250px"
                    }}
                    value={user_name}
                    onChange={(e) => setUser_name(e.target.value)}
                     
                  />
                </Form.Group>
                  </div>
                  <br />
                  <div className="input_field">
                  <Form.Group size="lg" controlId="password">
                  <Form.Control
                    type="email"
                    value={email}
                    id="text"
                    placeholder="Email"
                    style={{
                      backgroundColor: "rgb(198 193 193)",
                     border:"1px rbg(100 93 93)",
                     borderRadius:"4px",
                     textDecorationColor:"white",
                     width:"250px"
                    }}
                    onChange={(e) => setUser_Email(e.target.value)}
                  />
                </Form.Group>
                  </div>
                  <br />
                  <div className="input_field">
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
                     textDecorationColor:"white",
                     width:"250px"
                    }}
                    onChange={(e) => setUser_Password(e.target.value)}
                  />
                </Form.Group>
                  </div>
                  <br />
                  <div>
                    <label
                      htmlFor="role"
                      style={{ color: "white", marginLeft: "1px" }}
                      className="input_field"
                    >
                      Role
                    </label>
                    <select
                      onChange={(e) => setUser_Role(e.target.value)}
                      value={role}
                      name="role"
                      id="role"
                      style={{ marginLeft: "8px", color: "" }}
                    >
                      <option>Student</option>
                      <option>District</option>
                      <option>Teacher</option>
                      <option>Game</option>
                    </select>
                  </div>
                  <br />
                  <div
                    style={{
                      color: "white",
                      backgroundColor: "#823606",
                      height: "42px",
                      width: "140px",
                      marginLeft: "9px",
                      marginTop: "13px",
                      fontFamily: "Franklin Gothic, Cond Medium",
                    }}
                    className="btn"
                    onClick={register}
                  >
                    Sign Up
                  </div>
                  <br />
                  <br />
                  <p
                    style={{
                      color: "white",
                      fontFamily: "Franklin Gothic Book, Regular",
                      marginLeft: "2px",
                      position: "fixed",
                      marginTop: "1%",
                    }}
                  >
                    Already Have An Account?{" "}
                    <a href="/login" style={{ color: "#FF6400" }}>
                      Log In
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="logoimg" style={{ overflow: "hidden" }}>
                  <img
                    src="/images/Group 158.png"
                    alt="group"
                    style={{ height: "50%", width: "88%", marginTop: "18%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
