import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Typography } from '@material-ui/core'
import { useNavigate } from "react-router-dom";

const baseUrl = "https://boardswitch.herokuapp.com/"

export default function Signup() {
	const [user_name, setUser_name] = useState("")
	const [email, setUser_Email] = useState("")
	const [password, setUser_Password] = useState("")
	const [role, setUser_Role] = useState("student")
	const [postal, setUser_Postal] = useState("")
	const [district, setUser_District] = useState("")
	const nav = useNavigate()
	let navigate = useNavigate();
	const register = async () => {
		
		
		let item = { user_name, email, password, role, postal, district }
		console.warn(item)
		const res = axios.post(baseUrl + 'create_user/', item)
		console.warn((await res).status)
		if (res.status = 200) {
			nav('/')
		}else{
			alert("Error")
		}
	}
	return (
		<>
			<div className="signupbody">
						<div className="top">
							<div className="container-fluid">
								<div className="row">
									<div className="col-6">
										<Typography><h1 style={{
											color: "whitesmoke",
											marginLeft: "80px",
											fontFamily: "Franklin Gothic, Demi"
										}} >Sign up</h1></Typography>
										<br />
										<br />
										<div className="form">
											<div className="input_field"
												>
												<input type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} placeholder="Username" className="input" name="user_name" id="user_name" />
											</div>
											<br />
											<div className="input_field"
											>
												<input type="text" value={email} onChange={(e) => setUser_Email(e.target.value)} placeholder="Email" className="input" name="email" id="email" />
											</div>
											<br />
											<div className="input_field"
											
												>
												<input type="password" value={password} onChange={(e) => setUser_Password(e.target.value)} placeholder="Password" className="input" name="password" id="password" />
											</div>
											<br />
											<div>
												<label htmlFor="role" style={{ color: "white", marginLeft: "1px" }} className="input_field">Role</label>
												<select onChange={(e) => setUser_Role(e.target.value)} value={role} name="role" id="role"  style={{ marginLeft: "8px", color:""}}>
													<option>Student</option>
													<option>District</option>
													<option>Teacher</option>
													<option>Game</option>

												</select>
											</div>
											<br />
											<div  style={{ color: "white", backgroundColor: "#823606", height: "42px", width: "140px", marginLeft: "270px", marginTop:"166px", fontFamily: "Franklin Gothic, Cond Medium" }} className="btn" onClick={register}>Sign Up
											</div>
											<br />
											<br />
											<p  style={{ color: "white", fontFamily: "Franklin Gothic Book, Regular", marginLeft: "240px" , position:"fixed", marginTop:"1%" }}>Already Have An Account? <a href="/" style={{ color: "#FF6400" }}>Log In</a></p>
										</div>
									</div>
									<div className="col-6">
									<div className="logoimg" style={{ overflow:'hidden'}}>
              <img src="/images/Group 158.png" alt="group" style={{height:'50%', width:'88%', marginTop:'18%'}}/>
              </div>	
							</div>
								</div>
							</div>
							
						</div>

					</div>

			

		</>
	)
}
