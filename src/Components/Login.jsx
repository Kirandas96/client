import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios'



export const  Login=()=>{
const navigate=useNavigate()
const[data,setData]=useState({})

const handleLogin=()=>{
    console.log(data);
    axios.post("https://pear-easy-zebra.cyclic.app/auth/login",data)
    .then((res)=>{

        console.log(res,"as")
        if(res.data.message=="login successfull"){
            navigate("/home")
        }

    })
    .catch((err)=>console.log(err))
   }

const style = {
    
    margin:"auto",
    my:"40px",
    width: '450px',

    bgcolor: 'white',
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    p: 4,
    borderRadius:"1%"
  };


  return (
    
      
      
          <Box sx={style}>
             <Box>
               <Typography sx={{mt:1,fontWeight:'600',color:"#00081c"}} variant="h4" component="h1">
               Login
              </Typography>
              <Box sx={{display:'flex'}}>
                <Typography  variant="h6" sx={{ mt: 2}}>
                Not Signed?
                </Typography>
                
                <Typography onClick={()=>navigate("/signup")} variant="h6" sx={{ mt: 2,ml:1,mb:5,color:"#3B44F6"}}>
                  SignUp
                </Typography>
              </Box>
              <Grid sx={{
                display:"grid",
                gap:3,

              }}>
 <TextField
                id="outlined-password-input"
                label="User Name"
                type="text"
                autoComplete="current-password"
                required={true}
                fullWidth
                onChange={(e)=>setData({...data,name:e.target.value})}
                 />
                <TextField
                id="outlined-password-input"
                label="email"
                type="text"
                autoComplete="current-password"
                fullWidth
                required={true}
                onChange={(e)=>setData({...data,email:e.target.value})}
                 />
                 <TextField
                id="outlined-password-input"
                label="Password"
                type="text"
                autoComplete="current-password"
                fullWidth
                required={true}
                onChange={(e)=>setData({...data,password:e.target.value})}
                 />

               
              
              </Grid>

              <Button onClick={()=>handleLogin()} sx={{mt:3,mb:3,backgroundColor:"#00081c"}} color="success" variant='contained' fullWidth size="large">
                Login
              </Button>
              

          
              
              
            </Box>
            </Box>

            
    
  );
}
