import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideBar from "./sideBar.js";
import {useState} from 'react';



function App() {

  const [account, setAccount] =  useState(null);
  

  // console. log(('b'+'a'+ +'a'+'a').toLowerCase())
  
  /*
  if(account == null){
    return(
      <>
        <Menubar/>
        <LoginContent/>
      </>
    )

    <LoginContent/>    
    <Menubar/>
  }*/
  
  return (
    <>    
    <SideBar/>
    {/* <SpanningTable/> */}
    </>
  );
  


}

export default App;
