import * as React from 'react';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

import Profile from '../Pages/Profile';
import GamesTable from '../Pages/Games';
import District from '../Pages/District';
import Teacher from '../Pages/Teacher';
import Student from '../Pages/Student';
import "./drawer.css";
// import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const nav = useNavigate() 
  const { window } = props;
  const [ comp , setComp ] = React.useState("");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const project = () => {
    switch(comp) {

      case "gametable":   return <GamesTable />;
      case "district":   return <District />;
      case "teacher": return <Teacher />;
      case "student":  return <Student />;
      case "profile":  return <Profile />;

      default:      return
      //  <div className='stem' >
      //   <h1> WELCOME TO STEM 101 </h1>
      //   <img src='/images/Logo.png' alt='logo' />
      // </div>
    }
  }
  const logout = () => {
    localStorage.clear();
    nav('/')

  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div >
      <Toolbar />
      <Divider />
      <List >
        <div className="list mt-3" onClick={()=> { setComp ("profile")}}>
        <div className="d-flex flex-row">
          <div className="p-2"> <img src='/images/profile.png' alt='profile' style={{ width: "100%", height: "100%" }} /></div>
          <div className="p-2">Profile</div>
        </div>
        </div>
      </List>
      <List>
        <div className='list mt-3' onClick={ () => { setComp("gametable") } }>
          <div className='d-flex flex-row'>
            <div className='p-2'><img src='/images/game-console.png' alt='game' style={{ width: "100%", height: "100%" }}/></div>
            <div className='p-2'>Games</div>
          </div>
        </div>
      </List>
      <List>
        <div className='list mt-3' onClick={()=> { setComp ("district")}}>
          <div className='d-flex flex-row'>
            <div className='p-2'><img src='/images/building.png' alt='district' style={{ width: "100%", height: "100%" }}/></div>
            <div className='p-2' >District</div>
          </div>
        </div>  
      </List>
      <List>
        <div className='list mt-3' onClick={()=> { setComp ("teacher")}}>
          <div className='d-flex flex-row'>
            <div className='p-2'><img src="images/Layer-41.png" alt='teacher' style={{ width: "100%", height: "100%" }}/></div>
            <div className='p-2' >Teacher</div>
          </div>
        </div>
      </List>
      <List>
        <div className='list mt-3' onClick={()=> { setComp ("student")}}>
          <div className='d-flex flex-row'>
            <div className='p-2'><img src="images/Layer-51.png" alt='student' style={{ width: "100%", height: "100%" }}/></div>
            <div className='p-2'>Student</div>
          </div>
        </div>
      </List> 
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        
      >
        <Toolbar style={{backgroundColor:"black"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
         
          <div className='d-flex' >
            <div className='p-2'> <img src='/images/Logo.png' alt='logo' style={{ width: "70%", height: "100%" }} /></div>
            <div className='p-2'  >
              <div class="input-group rounded" >
              <span className="input-group-text border-0" id="search-addon" style={{backgroundColor:"black" ,color:"white"}}>
                    <SearchIcon />
              </span>
                  <input type="search" className="form-control rounded" style={{ backgroundColor : '#707070' }} placeholder="Search"  aria-label="Search" aria-describedby="search-addon" />
            </div>
                </div>
                <div className="logout" onClick={logout}>
                <LogoutIcon/>
              </div>
          </div>
          
          
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className="dashBody">
             { project() }
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
