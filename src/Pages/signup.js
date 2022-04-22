import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import { Typography } from '@material-ui/core'
const baseUrl = "https://boardswitch.herokuapp.com/"
export default function Signup() {
	const [user_name, setUser_name] = useState("")
	const [email, setUser_Email] = useState("")
	const [password, setUser_Password] = useState("")
	const [role, setUser_Role] = useState("student")
	const [postal, setUser_Postal] = useState("")
	const [district, setUser_District] = useState("")
	// async function register(){
	// let item ={user_name,email,password,role,postal,district}
	// console.warn(item)
	const register = async () => {
		let item = { user_name, email, password, role, postal, district }
		console.warn(item)
		const res = axios.post(baseUrl + 'create_user/', item)
		console.warn((await res).data)
		let user = (await res).data
		console.warn(user)
	}
	// 	let result = await fetch("http://localhost:5000/create_user/",{
	// 		method:'POST',
	// 		body: JSON.stringify(item),
	// 		headers:{
	// 			"Content-Type":'application/json',
	// 			"Accept":'application/json',
	// 		}
	// 	})
	// 	result = await result.json()
	// 	console.warn("result",result)
	// }
	return (
		<>
			<div className="signupbody">
				<div className="wrapper">
					<div className="header">
						<div className="top">
							<div className="container-fluid">
								<div className="row">
									<div className="col-11">
										<Typography><h1 style={{
											color: "whitesmoke",
											marginLeft: "80px",
											fontFamily: "Franklin Gothic, Demi"
										}}>Sign up</h1></Typography>
										<br />
										<br />
										<div className="form">
											<div className="input_field"
												style={{
													backgroundColor: "#707070",
													opacity: "0.23",
													border: "1px solid #707070",
													borderRadius: "4px",
													fontFamily: "Franklin Gothic Book, Regular"
												}}>
												<input type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} placeholder="Username" className="input" name="user_name" id="user_name" />
											</div>
											<br />
											<div className="input_field"
												style={{
													backgroundColor: "#707070",
													opacity: "0.23",
													border: "1px solid #707070",
													borderRadius: "4px",
													fontFamily: "Franklin Gothic Book, Regular"
												}}>
												<input type="text" value={email} onChange={(e) => setUser_Email(e.target.value)} placeholder="Email" className="input" name="email" id="email" />
											</div>
											<br />
											<div className="input_field"
												style={{
													backgroundColor: "#707070",
													opacity: "0.23",
													border: "1px solid #707070",
													borderRadius: "4px",
													fontFamily: "Franklin Gothic Book, Regular"
												}}>
												<input type="password" value={password} onChange={(e) => setUser_Password(e.target.value)} placeholder="Password" className="input" name="password" id="password" />
											</div>
											<br />
											<div>
												<label htmlFor="role" className="input_field" style={{ color: "white", marginLeft: "1px" }}>Role</label>
												<select onChange={(e) => setUser_Role(e.target.value)} value={role} name="role" id="role" style={{ marginLeft: "8px", color:""}}>
													<option>Student</option>
													<option>District</option>
													<option>Teacher</option>

												</select>
											</div>
											<br />
											<div className="btn" onClick={register} style={{ color: "white", backgroundColor: "#823606", height: "42px", width: "140px", marginLeft: "70px", fontFamily: "Franklin Gothic, Cond Medium" }}>Sign Up
											</div>
											<br />
											<br />
											<p style={{ color: "white", fontFamily: "Franklin Gothic Book, Regular", marginLeft: "30px" }}>Already Have An Account? <a href="/" style={{ color: "#FF6400" }}>Log In</a></p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-2">
								<img style={{ height: "370px", marginLeft: "480px", marginTop: "-580px", width: "580px" }} src="Group 158.png" alt="group" />
							</div>
						</div>

					</div>

				</div>
			</div>

		</>
	)
}