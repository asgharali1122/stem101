import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const drawerWidth = 240;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [data, setData] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const direction = (type) => {

    if (type == "games") {
      console.log("in games")
      window.location.href = "/game"
    }
  }

  const logout = () => {
    console.warn("inlogout")
    localStorage.clear();
    localStorage.setItem("user", false);
    console.warn("after user false");
    window.location.href = "/";
  }
  const onProfile = async () => {
    console.warn(data)
  }
  return (
    <Box sx={{ display: 'flex' }} >

      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: 'black' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-4 mt-4'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <img src='Logo.png' alt='alt-logo' style={{
                width: "266px",
                height: "41px",
                paddingRight: "94px",
                paddingTop: "6px",
                marginLeft: "0px",
                marginTop: "1px",
              }} />
              <div onClick={logout}>
                Signout
              </div>
            </div>

            <div className='col-6' style={{
              paddingTop: "15px"
            }}>
              <Toolbar>
                <Search style={{ backgroundColor: '#707070' }}>
                  <SearchIconWrapper >
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Toolbar>
            </div>
            <div className='col-2'>
              <img src="harley.png" alt="alt-png" style={{

                width: "85px",
                height: "65px",
                marginTop: "5px",
                marginLeft: "21px"
              }} />
            </div>
          </div>
        </div>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ backgroundColor: "#0D223F" }}>
          <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <div onClick={() => { window.location.href = "/profile"; }} >
          <List style={{ backgroundColor: "#0D223F" }}  >
            {['Profile'].map((text, index) => (
              <ListItemButton
                key={text}
                sx={{
                  minHeight: 110,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <img src='profile.png' alt='profile' style={{ width: "45px", height: "33px" }} />
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} style={{ color: "white", marginLeft: "11px" }} />
              </ListItemButton>
            ))}
          </List>
        </div>
        <div>
          <div >
            <List style={{ backgroundColor: "#0D223F" }} onClick={() => { direction("games") }}  >
              {['Games'].map((text, index) => (
                <ListItemButton
                  key={text}
                  sx={{
                    minHeight: 110,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <img src='game.png' alt='game' style={{ width: "45px", height: "33px" }} />
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} style={{ color: "white", marginLeft: "11px" }} />
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
        <div onClick={onProfile}>
          <div onClick={() => { window.location.href = "/district"; }}>
            <List style={{ backgroundColor: "#0D223F" }}  >
              {['District'].map((text, index) => (
                <ListItemButton
                  key={text}
                  sx={{
                    minHeight: 110,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <img src='district.png' alt='district' style={{ width: "45px", height: "33px" }} />
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} style={{ color: "white", marginLeft: "11px" }} />
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
        <div onClick={onProfile}>
          <div onClick={() => { window.location.href = "/teacher"; }}>
            <List style={{ backgroundColor: "#0D223F" }}  >
              {['Teachers'].map((text, index) => (
                <ListItemButton
                  key={text}
                  sx={{
                    minHeight: 110,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <img src='teacher.png' alt='teacher' style={{ width: "45px", height: "33px" }} />
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} style={{ color: "white", marginLeft: "11px" }} />
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
        <div onClick={onProfile}>
          <div onClick={() => { window.location.href = "/student"; }}>
            <List style={{ backgroundColor: "#0D223F" }}  >
              {['Students'].map((text, index) => (
                <ListItemButton
                  key={text}
                  sx={{
                    minHeight: 110,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <img src='student.png' alt='student' style={{ width: "45px", height: "33px" }} />
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} style={{ color: "white", marginLeft: "11px" }} />
                </ListItemButton>
              ))}
            </List>
          </div>
        </div>
      </Drawer>
      <Box >
        <DrawerHeader />
      </Box >
    </Box>
  );
}
