import * as React from 'react';
import {useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useCookies } from 'react-cookie';

export default function LoginContent(){
    const [account, setAccount] = useState("");
    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberAccount']);
    
    useEffect(() => {
      
      if(cookies.rememberAccount !== undefined) {        
        setAccount(cookies.rememberAccount);
        setIsRemember(true);
      }
    }, []);

    const handleOnChange = (e) => {
      setIsRemember(e.target.checked);
      if(e.target.checked){        
        setCookie('rememberAccount', account, {maxAge: 2000});
      } else {
      removeCookie('rememberAccount');
      }
    }

    return(
      
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          ></Box>            
        <Box>      
        <Typography component="h1" variant="h5" color = "gray">
          CloudUI Login
        </Typography>
        <TextField label="Account" required name="account" fullWidth sx ={{mt:3}} onChange={(e) =>{setAccount(e.target.value)}} value={account}/>
        <TextField label="Password" type="password" requier name ="password" autoComplete="current-password" fullWidth/>
        <FormControlLabel control={<Checkbox value="remember" color="primary" dir="ltl" onChange={handleOnChange} checked={isRemember}/> } label="Remember me"></FormControlLabel>
        <Button type="submit" variant ="contained" fullWidth sx={{mt:3}} color = "success">Login</Button>    
        </Box>
      </Container>    
    )
  }
  