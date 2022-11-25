import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ServiceTable from "./serviceSet.js"
import StarBorder from '@mui/icons-material/StarBorder';
import DashBoard from "./dashBoard.js"
import SessionTable from "./sessionSet.js"
import AppIdTable from "./appIdSet.js"
import LoginContent from "./login.js"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ModeSet from  "./modeSet.js"
import Test from "./checkboxs.js"

import './sideBar.css';
const drawerWidth = 240;




function IconReturn(index){
  if(index == 0)
    return(<DashboardIcon />);
  else if(index == 1)
    return(<WorkspacesIcon />);  
  else if(index == 2 || index == 3)
    return(<CalendarViewMonthIcon />);
  
}
export default function ClippedDrawer() {
  const [account, setAccount] = React.useState('');
  const [page, setPage] = useState("loginPage");
  const handleChange = (event: SelectChangeEvent) => {
    setAccount(event.target.value);
  };

  let mainContent = null;
  /*
    topLevelBtn0 : DashBoard
    topLevelBtn2 : SystemLog
    topLevelBtn3 : 계정관리
    middleLevelBtn1 : ModeSet수정
    lowLevelBtn0 : session 서버 설정
    lowLevelBtn1 : 서비스 서버 설정
    lowLevelBtn2 : AppID 설정
    lowLevelBtn3 : 계정관리

    
  */
  if(page === "loginPage"){
    mainContent = <LoginContent/>;
  }else if(page === "topLevelBtn0"){
    mainContent = <DashBoard/>;
    // mainContent = <SpanningTable/>;
  }else if(page === "lowLevelBtn0"){
    mainContent = <SessionTable/>;
  }else if(page === "lowLevelBtn1"){
    mainContent = <ServiceTable/>;
  }else if(page === "lowLevelBtn2"){
    mainContent = <AppIdTable/>
  }else if(page == "middleLevelBtn1"){
    mainContent = <ModeSet/>
  }else if(page == "topLevelBtn2"){
    console.log("test");
    mainContent = <Test/>;
  }
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className="testTool">                            
            <Typography variant="h6" noWrap component="div" className="titleText" >
            CloudUI BE Admin
            </Typography>
           
            <AccountCircleIcon sx ={{ml : "1220px"}}/>
            
            <NotificationsIcon sx ={{ml : "50px"}} />
            
            <FormControl sx ={{ml : "50px"}}>
            <InputLabel id="demo-simple-select-label">Account</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className="accountTag"
              value={account}
              label="account"
              onChange={handleChange}                          
            >
              <MenuItem value={10}>admin</MenuItem>
              <MenuItem value={20}>user</MenuItem>            
            </Select>
          </FormControl>                  

        </Toolbar>
        
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        
        <Toolbar />

        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['DashBoard', 'ModeSet', 'System log', '계정관리'].map((text, index) => (
              //for문 진행              
              GetListItem(text, index, setPage)
            ))}            
          </List>
          <Divider />          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        {mainContent}
      </Box>
    </Box>
  );
}


function GetListItem(text, index, setPage){
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  }
  if(index === 1){
    return(
      <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon/>                 
        <ListItemText primary="ModeSet" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={handleClick2}>
          <ListItemIcon/>                      
          <ListItemText primary="기본 설정" />
          {open2 ? <ExpandLess/> : <ExpandMore/>}          
        </ListItemButton>    

        


        <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>            
          {['session 서버 설정', '서비스 서버 설정', 'App ID 설정'].map((text, index) => (
            <ListItemButton sx={{ pl: 4 }} onClick={() =>{
              setPage('lowLevelBtn'+index);
              // console.log('lowLevelBtn'+index);
            }}>
            <ListItemIcon/>                          
            <ListItemText primary={text}/>                        
          </ListItemButton>  
          ))}
        </List>
        </Collapse>

        <ListItemButton onClick={()=>{
          setPage('middleLevelBtn1');
          // console.log('middleLevelBtn' + 1);
        }}>
          <ListItemIcon/>                          
          <ListItemText primary="ModeSet 수정"/>                        
        </ListItemButton>          

      </List>
    </Collapse>
    </>    
  )}else{
    return(
      <ListItem key={text} disablePadding>
        <ListItemButton onClick={() => {
          // console.log('topLevelBtn'+index);
          setPage('topLevelBtn'+index);
        }}>
          <ListItemIcon>
            {IconReturn(index)}                                              
          </ListItemIcon>
          <ListItemText primary={text} />     
      
        </ListItemButton>                                    
      </ListItem>
    )
  }
  
}