import { Button, Typography } from '@material-ui/core'
import React from 'react'
import './start.css'

const StartPage = () => {

  return (
    <>
      <div className='startbody'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6'>
              <Typography>
                <h1 style={{ color: "white" , marginTop:"200px", marginLeft:"100px"}}>
                  Inspiring Learning. <br/>
                  Connecting communities.
                </h1>
                <br />
                <h5 style={{ color: "white", marginTop:"10px", marginLeft:"100px" }}>We partner with companies to connect students and adult learners to in-demand career pathways. Corporations and government entities partner with STEM 101 to develop real-world projects for classroom and workforce service use.</h5>
              </Typography>
              <br/>
              <div style={{ backgroundColor: "#823606", marginLeft:"220px",  height:"60px", width:"203"}} className="btn"><a href="/login" style={{ color: "white" }}><h2>Get Started</h2> </a>
              </div>
            </div>
            <div className="col-6" >
									<div className="logoimg" style={{ overflow:'hidden'}}>
              <img src="/images/Group 158.png" alt="group" style={{height:'50%', width:'70%', marginTop:'31%', marginLeft:"70px"}}/>
              </div>	
							</div>
          </div>
        </div>

      </div>

    </>
  )
}

export default StartPage