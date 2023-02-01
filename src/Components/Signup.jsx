import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import { useState } from 'react';



export const  Signup =()=>{
 const navigate=useNavigate()

 const[sign,setSign]=useState({})

const handleSignUp=()=>{
    axios.post("https://pear-easy-zebra.cyclic.app/auth/signup",sign)
    .then((res)=>{

        console.log(res,"as")
        
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
               Register
              </Typography>
              <Box sx={{display:'flex'}}>
                <Typography  variant="h6" sx={{ mt: 2}}>
                Already Signedup?
                </Typography>
                
                <Typography  onClick={()=>navigate("/")} variant="h6" sx={{ mt: 2,ml:1,mb:5,color:"#3B44F6"}}>
                  Log in
                </Typography>
              </Box>
              <Grid sx={{
                display:"grid",
                gap:3,

              }}>

                <TextField
                id="outlined-password-input"
                label="Name"
                type="text"
                autoComplete="current-password"
                required={true}
               fullWidth
               onChange={(e)=>setSign({...sign,name:e.target.value})}
                 />
                 <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                autoComplete="current-password"
                required={true}
                fullWidth
                onChange={(e)=>setSign({...sign,email:e.target.value})}
                 />
                 <TextField
                id="outlined-password-input"
                label="Password"
                type="text"
                autoComplete="current-password"
                required={true}
                fullWidth
                onChange={(e)=>setSign({...sign,password:e.target.value})}
                 />


                 
               
                 
               
              </Grid>

              <Button onClick={()=>handleSignUp()} sx={{mt:3,mb:3,backgroundColor:"#00081c"}} color="success" variant='contained' fullWidth size="large">
                SignUp
              </Button>
            </Box>
            </Box>

            
    
  );
}
