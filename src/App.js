import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../src/Components/Login";

import SideBar from "../src/Components/SideBar";
import GamesTable from "../src/Pages/Games"
import District from "./Pages/District";
import Signup from "./Pages/signup";
import Student from "./Pages/Student";
import Teacher from "./Pages/Teacher";
import Profile from "./Pages/Profile";
import StartPage from "./Pages/StartPage";
import ResponsiveDrawer from "../src/Components/drawer";
import Practice from "./Pages/Practice";



const App = () => {
  const [auth, setAuth] = useState(null);

  // used to check if user is logged in
  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  //used to logout if user is not authenticated
  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          
          {!auth && (
            <Route
              path="/login"
              element={<Login authenticate={() => setAuth(true)}/> }
              
              />
            
)}
          
          <Route path="/" element={<StartPage/>}/>          
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/practice" element={<Practice/>} /> */}
        
          {auth && (
            <>
            <Route path="/dashboard" element={<ResponsiveDrawer />} />
            
              {/* <Route
                path="/game"
                element={<GamesTable logout={() => setAuth(false)} />}
              />
              
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/student" element={<Student />} />
              <Route path="/district" element={<District />} />
              <Route path="/profile" element={<Profile />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>

  );
};
export default App;