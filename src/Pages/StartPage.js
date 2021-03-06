import { Button, Typography } from '@material-ui/core'
import React from 'react'
import './start.css'

const StartPage = () => {

  return (
    <>
        <div className='container-fluid startbody'>
          <div className='row'>
            <div className='col-6'>
              <Typography>
                <h1 style={{ color: "white" , marginTop:"200px", marginLeft:"100px"}}>
                  Inspiring Learning. <br/>
                  Connecting communities.
                </h1>
                <br />
                <p style={{ color: "white", marginTop:"10px", marginLeft:"100px",WebkitUserModify:"read-write-plaintext-only" }}>We partner with companies to connect students and adult learners to in-demand career pathways. Corporations and government entities partner with STEM 101 to develop real-world projects for classroom and workforce service use.</p>
              </Typography>
              <br/>
              <div  className="btn"><a href="/login" style={{ color: "white" }}><img style={{height:"60px", marginLeft:"100px"}} src='/images/Group 161.png' alt='Group' /> </a>
              </div>
            </div>
            <div className="col-6" >
									<div className="logoimg" style={{ overflow:'hidden'}}>
              <img src="/images/Logo.png" alt="group" style={{height:'50%', width:'70%', marginTop:'31%', marginLeft:"70px"}}/>
              </div>	
							</div>
          </div>
        </div>
    </>
  )
}

export default StartPage